const {updateHotelBD} = require("../../controllers/HotelControllers/indexControlers.js")

const putUpdateHotel = async (req, res) => {
    const { id, name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude,status, destinationId } = req.body;
    
    
    try {
        const updatedData = {
            name,
            image,
            email,
            address,
            phone,
            checkIn,
            checkOut,
            numberRooms,
            overview,
            longitude,
            latitude,
            status,
            destinationId,
          }
          // console.log("***updatedData*************");
          // console.log(id);
          // console.log(updatedData);
          // console.log("***updatedData*************");
      const hotelDataUpd = await updateHotelBD( id,updatedData);
      res.status(200).json(hotelDataUpd);
    // res.status(200).json("actualizando");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    putUpdateHotel,
  };