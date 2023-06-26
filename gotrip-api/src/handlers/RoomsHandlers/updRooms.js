const {putUpdateRooms} = require("../../controllers/RoomsControllers/indexControlers.js")
const {bookingVal} = require("../../controllers/RoomsControllers/validateBooking.js")
const putRoomUpdate = async (req, res) => {
    const {id,room,price,numRooms,roomsInUse,description,status,hotelId,ServicesRoom } = req.body;
 
    try {
        const updatedData = {
            room,
            price,
            numRooms,
            roomsInUse,
            description,
            status,
            hotelId,
            ServicesRoom
        }
    //   console.log("***updatedData*************");
    //       console.log(id);
    //       console.log(updatedData);
    //       console.log("***updatedData*************");
    
    
     const DataUpd = await putUpdateRooms( id ,updatedData);
      if(DataUpd.state){
        res.status(200).json(DataUpd);
    }else {
        res.status(400).json(DataUpd);
    }
    
    // res.status(200).json("actualizando");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {    
    putRoomUpdate
  };