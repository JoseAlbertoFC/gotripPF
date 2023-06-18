const { Op } = require("sequelize");
const { Hotel, Destination} = require("../../db")

const getHotelAll = async()=>{
    try{
        const objHotel = await Hotel.findAll({
            include: [{
                model: Destination,
                as: 'destination',
                attributes: ['country','state','city','moneyType'],
            }],
        });
        return objHotel ;
    }catch(error){

    }
}

const getHotelParams = async(querysHotel,cantQuerys)=> {
    try {
        let whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda

     
        for (let key in querysHotel) {
            if (querysHotel.hasOwnProperty(key)) {
              const value = querysHotel[key];
              if (key === "status" || key === "destinationId" ){
                whereCondition[key] =value;
              }else{
                whereCondition[key] = { [Op.iLike]: `%${value}%` };
              }

          }
        }
  
  
        // Consultar la tabla de hoteles con las condiciones de búsqueda
        const hotels = await Hotel.findAll({
          where: whereCondition,
          include: [
            {
              model: Destination,
              as: "destination",
              attributes: ["country", "state", "city", "moneyType"],
            },
          ],
        });
    
        return hotels;
    }catch(error){
        // throw new Error({ error: error.message });
        return error
    }
}




const getHotelById = async(idHotel) =>{
    try {
        if (!idHotel) throw new Error(`The id is required`);
        const objHotel = await Hotel.findByPk(idHotel, {
          include: [
            {
              model: Destination,
              as: "destination",
              attributes: ["country", "state", "city", "moneyType"],
            },
          ],
        });
        if (!objHotel) return;
        return { ...objHotel.toJSON() };
      } catch (error) {
        throw new Error(error.message);
      }
}


module.exports = {
    getHotelById 
    ,getHotelParams
    ,getHotelAll 
}