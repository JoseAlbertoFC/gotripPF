const { Op } = require("sequelize");
const { Hotel} = require("../../db")


const updateHotelBD = async (idHotel, updatedData) => {
    try {
      if (!idHotel) throw new Error('The id is required');
      
      const hotel = await Hotel.findByPk(idHotel);
      
      if (!hotel) throw new Error('Hotel not found');
      
      const updatedHotel = await hotel.update(updatedData);
      
      return updatedHotel.toJSON();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  module.exports = {
    updateHotelBD
};