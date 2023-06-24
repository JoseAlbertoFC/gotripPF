const { Op } = require("sequelize");
const { Hotel, Destination,Rooms } = require("../../db");
//const api = require("../../../api/apiHotels.json");
//const Rooms = require("../../models/Rooms");
const {validaApi} = require("./buscaApi.js")
const getHotelAll = async () => {
  try {

   const datos =  validaApi()
      const createdHotels = await Hotel.findAll({
        include: [{ model: Destination, as: "destination" },{model: Rooms, as: "rooms" },],
      });
      return createdHotels;
    
      } catch (error) {
        throw Error(error.message);
      }
    };

const getHotelParams = async (querysHotel) => {
  try {
    const whereCondition = {}; // Objeto para almacenar las condiciones de búsqueda
    const keyValues = ["status", "destinationId"];

    Object.entries(querysHotel).forEach(([key, value]) => {
      if (keyValues.includes(key)) {
        whereCondition[key] = value;
      } else {
        whereCondition[key] = { [Op.iLike]: `%${value}%` };
      }
    });
    console.log(whereCondition);
    // Consultar la tabla de hoteles con las condiciones de búsqueda
    const hotels = await Hotel.findAll({
      where: whereCondition,
      include: [
        {
          model: Destination,
          as: "destination",
          attributes: ["country", "state", "city", "moneyType"],
        },
        {model: Rooms, as: "rooms" },
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
        {
          model: Destination,
          as: "destination",
          attributes: ["country", "state", "city", "moneyType"],
        },
        {model: Rooms, as: "rooms" },
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
