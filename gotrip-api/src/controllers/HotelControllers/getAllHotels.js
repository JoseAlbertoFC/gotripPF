const { Op } = require("sequelize");
const { Hotel, Destination,Rooms,Gallery,User } = require("../../db");

const {validaApi} = require("./buscaApi.js")
const getHotelAll = async () => {
  try {

   const datos =  validaApi()
      const objHotels = await Hotel.findAll({
        include: [
          {model: Destination, as: "destination" },
          {model: Rooms, as: "rooms" },
          {model: Gallery, as: "gallery" },
          {model: User, as: "user" },
        ],
      });
      return objHotels;
    
      } catch (error) {
        throw Error(error.message);
      }
    };

const getHotelParams = async (querysHotel) => {
  try {
    const whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda
    const keyValues = ["status", "destinationId","userId"];

    Object.entries(querysHotel).forEach(([key, value]) => {
      if (keyValues.includes(key)) {
        whereCondition[key] = value;
      } else {
        whereCondition[key] = { [Op.iLike]: `%${value}%` };
      }
    });
    //console.log(whereCondition);
    // Consultar la tabla de hoteles con las condiciones de búsqueda
    const hotels = await Hotel.findAll({
      where: whereCondition,
      include: [
        {model: Destination, as: "destination" },
        {model: Rooms, as: "rooms" },
        {model: Gallery, as: "gallery" },
        {model: User, as: "user" },
      ],
    });

    return hotels;
  } catch (error) {
    // throw new Error({ error: error.message });
    throw new Error(error.message);
  }
};

const getHotelById = async (idHotel) => {
  try {
    if (!idHotel) throw new Error(`The id is required`);
    const objHotel = await Hotel.findByPk(idHotel, {
      include: [
        {model: Destination, as: "destination" },
        {model: Rooms, as: "rooms" },
        {model: Gallery, as: "gallery" },
        {model: User, as: "user" },
      ],
    });
    if (!objHotel) return;
    return { ...objHotel.toJSON() };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getHotelById,
  getHotelParams,
  getHotelAll,
};
