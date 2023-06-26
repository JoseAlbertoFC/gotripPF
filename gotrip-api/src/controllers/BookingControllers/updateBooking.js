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
  
    const booking = await Booking.findByPk(id);
    if (booking) {
        //"Rejected", "Pending", "Approved"
        
        booking.dateIn = dateIn;
        booking.dateOut = dateOut;
        booking.roomNum = roomNum;
        booking.reservationStatus = reservationStatus;
        booking.gests = gests;
        
        let idRoom = booking.roomId
        
        if(reservationStatus=== "Rejected"){
          const DataUpd = await bookingVal( idRoom ,1,"SUS");
          if(!DataUpd.state){
            return DataUpd;
          }
        }

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