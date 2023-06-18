const {
  createRating,
} = require("../../controllers/RatingControllers/createRating");

const postRating = async (req, res) => {
  const { rating, comment, userId, hotelId } = req.body;
  try {
    const result = await createRating(rating, comment, userId, hotelId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postRating,
};
