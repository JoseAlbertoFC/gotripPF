const {
  paranoidBooking,
} = require("../../controllers/BookingControllers/restoreBooking");

const restoreBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await paranoidBooking(id);
    if (!id) {
      res.status(400).json({ error: "It is not possible to recover this Booking" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  restoreBooking,
};
