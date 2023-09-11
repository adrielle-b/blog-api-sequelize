const { Category, BlogPost } = require('../../models');

const categoryIdVerify = async (categoryIds) => {
    const promises = categoryIds.map((id) => Category.findByPk(id));
    const categoryIdsExist = await Promise.all(promises);

    const errorResults = categoryIdsExist.some((result) => result === null);
    if (errorResults) {
      return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
    }
};

  const postVerify = async (postId, userId) => {
    const blogPost = await BlogPost.findByPk(postId);
    if (!blogPost) return { status: 'NOT_FOUND', message: 'Post does not exist' };
  
    if (blogPost && blogPost.userId !== userId) {
      return { status: 'UNAUTHORIZED', message: 'Unauthorized user' };
    }
};

  module.exports = {
    categoryIdVerify,
    postVerify,
};