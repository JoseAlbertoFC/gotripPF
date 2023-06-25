const { User, Booking, Hotel, Rooms } = require("../../db");
const {bookingVal} = require("../RoomsControllers/validateBooking.js");

const createBooking = async (
  dateIn,
  dateOut,
  roomNum,
  reservationStatus,
  gests,
  hotelId,
  roomId,
  userId
) => {
  try {
    const newBooking = await Booking.create({
      dateIn,
      dateOut,
      roomNum,
      reservationStatus,
      gests,
      hotelId,
      roomId,
      userId,
    });
    const DataUpd = await bookingVal( roomId ,1,"ADD");
    if(DataUpd.state){
      //hace de todo
      const bookingWithDetails = await Booking.findOne({
        where: { id: newBooking.id },
        include: [
          {
            model: User,
            as: "user",
          },
          {
            model: Hotel,
            as: "hotel",
          },
          {
            model: Rooms,
            as: "rooms",
          },
        ],
      });
  
      return bookingWithDetails;
    }else{
      throw new Error({ error: error.message });
    }

   
  } catch (error) {
    console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createBooking,
};
