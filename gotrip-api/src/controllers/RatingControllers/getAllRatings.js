const { Rating, Hotel, User } = require("../../db");

const getAllRatings = async () => {
  try {
    return await Rating.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Hotel,
          as: "hotel",
        },
      ],
    });
  } catch (error) {
    console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getAllRatings,
};
