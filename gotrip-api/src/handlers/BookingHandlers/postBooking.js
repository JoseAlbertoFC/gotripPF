const {
  createBooking,
} = require("../../controllers/BookingControllers/createBooking");

const postBooking = async (req, res) => {
  const { dateIn, dateOut, roomNum, reservationStatus, gests } = req.body;
  try {
    const result = await createBooking(
      dateIn,
      dateOut,
      roomNum,
      reservationStatus,
      gests
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postBooking,
};
