const { Category } = require('../../models');

const categoryIdVerify = async (categoryIds) => {
    const promises = categoryIds.map((id) => Category.findByPk(id));
    const categoryIdsExist = await Promise.all(promises);

    const errorResults = categoryIdsExist.some((result) => result === null);
    if (errorResults) {
      return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
    }
  };

  module.exports = {
    categoryIdVerify,
};