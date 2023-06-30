const { Op,Sequelize,DataTypes  } = require("sequelize");
const { Rooms,Service,Gallery} = require("../../db")

const findServices = async(objRoomsServices)=>{
  try{
   // console.log("******objRoomsServices**** " + JSON.stringify(objRoomsServices, null, 2));
    const roomsWithServices = await Promise.all(objRoomsServices?.map(async (room) => {
      const servicesDetail = await Promise.all(room.ServicesRoom?.map(async (serviceId) => {
        const service = await Service.findByPk(serviceId);
        return {
          id: service.id,
          name: service.name,
        };
      }));    
      return { ...room.toJSON(), ServicesDetail: servicesDetail };
    }));
    return roomsWithServices;
  } catch(error){
    // console.log("error:::: " + error);
      throw new Error(error.message);
  }
}

const getRoomsAll = async()=>{
    try{
      const objRooms = await Rooms.findAll({
        include: [   
          {model: Gallery, as: "gallery" }
        ],
      });
       //console.log("***objRooms***" + JSON.stringify(objRooms));
      if (!objRooms) {
        
        throw new Error(error);
      } else {
        const roomsServices = findServices(objRooms);
        return roomsServices;
      }     
    }
    catch(error){
     // console.log("error:::: " + error);
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
      const objRooms = await Rooms.findAll({
        where: whereCondition,
        include: [   
          {model: Gallery, as: "gallery" }
        ],
      });
  
      if (objRooms.length === 0) {
        throw new Error("No data found");
      }
      const roomsServices = findServices(objRooms);
      return roomsServices;
     // return RoomsData;
    } catch (error) {
      // throw new Error({ error: error.message });
    //console.log(error);
      throw new Error(error.message);
    }
  };


const getRoomById = async(idRoom)=>{
    try {
    
        if (!idRoom) throw new Error(`The id is required`);
         const objRooms = await Rooms.findByPk(idRoom,
          { include: [   
          {model: Gallery, as: "gallery" }
        ],});
        if (!objRooms){       
          throw new Error(error);
        }else{
          const servicesDetail = await Promise.all(objRooms.ServicesRoom?.map(async (serviceId) => {
            const service = await Service.findByPk(serviceId);
            return {
              id: service.id,
              name: service.name,
            };
          }));    
          return { ...objRooms.toJSON(), ServicesDetail: servicesDetail };
         
         // return { ...objRooms.toJSON() };
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