const { User, Rating, Hotel } = require("../../db");

const createRating = async (rating, comment) => {
  try {
    const newRating = await Rating.create({rating, comment});

    const ratingWithDetails = await Rating.findOne({
      where: { id: newRating.id },
      include: [
        { model: User, as: "user", attributes: ["id", "name"] },
        { model: Hotel, as: "hotel", attributes: ["id", "name"] },
      ],
    });

    return ratingWithDetails;
  } catch (error) {
    console.log({ error: error.message })
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createRating,
};