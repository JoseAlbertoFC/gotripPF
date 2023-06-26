const { Booking } = require("../../db");
const {bookingVal} = require("../RoomsControllers/validateBooking.js");

const destroyBooking = async (id) => {
  try {
    // console.log("***** id -- " +id);
    const booking = await Booking.findByPk(id);
    if (booking) {

      let idRoom = booking.roomId
      const DataUpd = await bookingVal( idRoom  ,1,"SUS");
      // console.log("***** DataUpd.state-- " + DataUpd.state);
      
      if(DataUpd.state){
        return await Booking.destroy({where: {id: id}});
      }   

    }
    
  } catch (error) {
    throw new Error({ error: error.message });
  }
};



module.exports = {
  destroyBooking,
};