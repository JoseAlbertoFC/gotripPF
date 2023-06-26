const { Booking } = require("../../db");
const {bookingVal} = require("../RoomsControllers/validateBooking.js");

const updateBooking = async (id, {
  dateIn,
  dateOut,
  roomNum,
  reservationStatus,
  gests,
}) => {
  try {
    //"Rejected", "Pending", "Approved"
    if(reservationStatus=== "Rejected"){
      const DataUpd = await bookingVal( roomId ,1,"SUS");
      if(!DataUpd.state){
        return DataUpd;
      }
    }  

    const booking = await Booking.findByPk(id);
    if (booking) {
      booking.dateIn = dateIn;
      booking.dateOut = dateOut;
      booking.roomNum = roomNum;
      booking.reservationStatus = reservationStatus;
      booking.gests = gests;

      await booking.save();
      return booking;
    } else {
      return { error: "Booking not found." }; 
    }
  } catch (error) {
    console.error({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  updateBooking,
};