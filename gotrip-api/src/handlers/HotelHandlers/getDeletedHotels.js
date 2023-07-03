const { readDeletedHotel } = require("../../controllers/HotelControllers/readDeletedHotels")

const getDeletedHotel = async (req, res) => {
    try {
        const result = await readDeletedHotel();
    
        if (result.length === 0)
          return res.status(401).json({ menssage: "No Existen Hoteles Eliminados" });
    
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

module.exports = {
  getDeletedHotel,
};
