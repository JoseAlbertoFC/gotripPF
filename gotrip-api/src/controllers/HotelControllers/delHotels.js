const { Op } = require("sequelize");
const { Hotel} = require("../../db")


const hotelDelete = async (idHotel) => {
  // console.log("************controler hotelDelete **********");
  // console.log("idHotel*****" +idHotel);
  const  dataState = {
    state: false,
    text:"",
    detail:""
    };    
    // console.log(dataState );
  try {
        if (!idHotel)  {          
          dataState.text ="The hotel ID is required";          
          return dataState ;
        };  
        //throw new Error("The hotel ID is required");
    
        // Buscar el hotel por su ID
        const hotel = await Hotel.findByPk(idHotel);        
        if (!hotel)  {          
          dataState.text ="Hotel not found";          
          return dataState ;
        }
         
        await hotel.destroy();
        const hotelBorrado = await Hotel.findByPk(idHotel);
         if(!hotelBorrado ){
            dataState.state = true;
            dataState.text ="Hotel deleted successfully";
          }else{
            dataState.text ="Error tratando de borrar el Hotel";
            dataState.detail =`El ID: ${idHotel}`;
          }
          return dataState ;
        //throw new Error("Hotel not found");
        
      } catch (error) {
        dataState.state = "Error";
        dataState.text = error.message;
        dataState.detail =error.parent.detail;
        return dataState;
      }
  };

  module.exports = {
    hotelDelete
}