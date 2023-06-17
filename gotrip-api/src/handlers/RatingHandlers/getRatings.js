const { getAllRatings } = require("../../controllers/RatingControllers/getAllRatings");

const getRatings = async (req, res) => {
    try {
      const result = await getAllRatings();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  getRatings,
};