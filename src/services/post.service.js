const { sequelize, BlogPost, PostCategory, Category, User } = require('../models');
const { categoryIdVerify } = require('./validations/post.validations');

const insert = async ({ userId }, { title, content, categoryIds }) => {
    const errorCategories = await categoryIdVerify(categoryIds);
    if (errorCategories) {
      return { status: errorCategories.status, data: { message: errorCategories.message } };
    }
    const createPost = await sequelize.transaction(async (t) => {
      const insertBlogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
      const insertPostCategoryList = categoryIds.map((categoryId) => ({
          postId: insertBlogPost.id,
          categoryId,
      }));
      await PostCategory.bulkCreate(insertPostCategoryList, { transaction: t });
      return insertBlogPost;
    });
      return { status: 'CREATED', data: createPost };
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: blogPosts };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  return { status: 'SUCCESSFUL', data: post };
};

const update = async (postId, title, content, userId) => {
  const blogPost = await BlogPost.findByPk(postId);
  if (blogPost.userId !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  } 
  await BlogPost.update(
    { title, content, updated: Date.now() },
    { where: { id: postId } },
  );
  const postUpdated = await getById(postId);
  return postUpdated;
};

module.exports = {
    insert,
    getAll,
    getById,
    update,
};