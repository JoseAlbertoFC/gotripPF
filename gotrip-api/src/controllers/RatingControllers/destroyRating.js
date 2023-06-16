const { Rating } = require("../../db");

const destroyRating = async (id) => {
  try {
    return await Rating.destroy({where: {id: id}});
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  destroyRating,
};