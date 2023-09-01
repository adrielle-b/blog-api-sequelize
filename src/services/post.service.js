const { sequelize, BlogPost, PostCategory, Category, User } = require('../models');

const categoryIdVerify = async (categoryIds) => {
    const promises = categoryIds.map((id) => Category.findByPk(id));
    const categoryIdsExist = await Promise.all(promises);

    const errorResults = categoryIdsExist.some((result) => result === null);
    if (errorResults) {
      return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
    }
  };

const insert = async (user, post) => {
    const { userId } = user;
    const { title, content, categoryIds } = post;

    const errorCategories = await categoryIdVerify(post.categoryIds);
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

module.exports = {
    insert,
    getAll,
};