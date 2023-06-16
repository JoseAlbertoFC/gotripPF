const { getAllBookings } = require("../../controllers/BookingControllers/getAllBookings");

const getBookings = async (req, res) => {
    try {
      const result = await getAllBookings();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  getBookings,
};