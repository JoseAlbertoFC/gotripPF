const { Op } = require("sequelize");
const { Hotel} = require("../../db")


const hotelDelete = async (id) => {
    try {
      if (!id) throw new Error('The id is required');
      
      const deletedHotel = await Hotel.destroy({where: {id: id}});
                                               
      
      if (deletedHotel === 0) return false;
      
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  };


  module.exports = {
    hotelDelete
}