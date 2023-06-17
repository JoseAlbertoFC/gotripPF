const {
  destroyRating,
} = require("../../controllers/RatingControllers/destroyRating");

const deleteRating = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await destroyRating(id.toUpperCase());
    if (result === 0)
      return res.status(400).json("This comment was not deleted correctly");
    res.status(200).json("This comment was successfully removed");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteRating,
};
