const {putUpdateRooms} = require("../../controllers/RoomsControllers/indexControlers.js")

const putUpdateRoom = async (req, res) => {
    const { id, room, price,numRooms,availableRooms,description, status, hotelId } = req.body;
 
    try {
        const updatedData = {
            room, price,numRooms,availableRooms,description, status, hotelId ,
        }
         console.log("***updatedData*************");
          console.log(id);
          console.log(updatedData);
          console.log("***updatedData*************");
    
     const DataUpd = await putUpdateRooms( id ,updatedData);
      res.status(200).json(DataUpd);
    // res.status(200).json("actualizando");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    putUpdateRooms,
  };