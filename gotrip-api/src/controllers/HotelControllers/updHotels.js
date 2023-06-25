const { Op } = require("sequelize");
const { Hotel} = require("../../db")


const updateHotelBD = async (idHotel, updatedData) => {
  const dataState = {
    state: false,
    text: "",
    detail: "",
  };  
  try {
       
    console.log("******idHotel ** " +idHotel );
    console.log("******updatedData ** " +updatedData );
      if (!idHotel) {
        dataState.text = "The hotel ID is required";
        return dataState;
      }
      

      const hotel = await Hotel.findByPk(idHotel);      
      if (!hotel){
        dataState.text = "Hotel not found";
        return dataState;
      }else{
        const updatedHotel = await hotel.update(updatedData);

        dataState.state= true,
        dataState.text = "SUCCESSFULLY UPDATED HOTEL";
        dataState.detail=  updatedHotel.toJSON();
        return dataState;
  
      }

    } catch (error) {
        dataState.state = "Error";
        dataState.text = error.message;
        dataState.detail =error.parent.detail;
        return dataState;
      }
  };

  module.exports = {
    updateHotelBD
};