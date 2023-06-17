const {
  getDetailBooking,
} = require("../../controllers/BookingControllers/getDetailBooking");

const getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await getDetailBooking(id.toUpperCase());
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBookingById,
};
