const {
    updateBooking,
  } = require("../../controllers/BookingControllers/updateBooking");
  
  const putBooking = async (req, res) => {
    const { id } = req.params;
    const { dateIn, dateOut, roomNum, reservationStatus, gests } = req.body;
    // console.log(req.params)
    // console.log(req.id)
    try {
      const result = await updateBooking(id, {
        dateIn,
        dateOut,
        roomNum,
        reservationStatus,
        gests,
      });
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    putBooking,
  };
  