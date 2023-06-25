const { Op,Sequelize,DataTypes  } = require("sequelize");
const { Rooms,Services} = require("../../db")

const getRoomsAll = async()=>{
    try{
      const rooms = await Rooms.findAll(
        // { include: {
        //   model: Services,
        //   where: {
        //     id: {
        //       [Op.in]: Rooms.ServicesRoom
        //     },
        //   },  }, }
      );
  
      return rooms;
    }
    catch(error){
      console.log("error:::: " + error);
        throw new Error(error.message);
    }
}

const getRoomRarams = async (querysRooms) => {
    try {
      const whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda
      const keyValues = {
        priceRange: "price",
        dateRange: "createdAt"
      };
      
      Object.entries(querysRooms).forEach(([key, value]) => {
        if (keyValues.hasOwnProperty(key)) {
            const [value1, value2] = value.split("_");
            const columnTable = keyValues[key];
            if (key === "priceRange") {
              whereCondition[columnTable] = { [Op.between]: [parseFloat(value1), parseFloat(value2)] };
            } else if (key === "dateRange") {
            //   const [date1, date2] = value.split("-");
            //   const columnTable = keyValues[key];
              whereCondition[columnTable] = { [Op.between]: [new Date(value1), new Date(value2)] };
            }
          } else {
            whereCondition[key] = value;
          }
      });
      const RoomsData = await Rooms.findAll({
        where: whereCondition,
        // include: {
        //   model: Services,
        //   where: { id: { [Op.in]: literal('Rooms."ServicesRoom"') } },
        // },
      });
  
      if (RoomsData.length === 0) {
        throw new Error("No data found");
      }
  
      return RoomsData;
    } catch (error) {
      // throw new Error({ error: error.message });
    //console.log(error);
      throw new Error(error.message);
    }
  };


const getRoomById = async(idRoom)=>{
    try {
    
        if (!idRoom) throw new Error(`The id is required`);
        console.log("***idRoom *** " +idRoom);
        console.log("*******************");
        const objRooms = await Rooms.findByPk(idRoom);
          // , {include: {
          //   model: Services,
          //   where: { id: { [Sequelize.Op.in]: Sequelize.literal('Rooms."ServicesRoom"') } },
          // }, }
          
        if (!objRooms){
          // console.log("***objRooms error*** " +objRooms);
          // console.log("*******************");
          throw new Error(error);
        }else{
          // console.log("***objRooms toJSON *** " +objRooms);
          // console.log("*******************");
          return { ...objRooms.toJSON() };
        }                 
      } catch (error) {
        throw new Error(error.message);
      }
}



module.exports = {
    getRoomsAll,
    getRoomById,
    getRoomRarams
}