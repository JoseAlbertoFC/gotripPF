const { Booking } = require("../../db");
const {bookingVal} = require("../RoomsControllers/validateBooking.js");

const destroyBooking = async (id) => {
  try {
    const DataUpd = await bookingVal( roomId ,1,"SUS");
    if(DataUpd.state){
      return await Booking.destroy({where: {id: id}});
    }    
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  destroyBooking,
};