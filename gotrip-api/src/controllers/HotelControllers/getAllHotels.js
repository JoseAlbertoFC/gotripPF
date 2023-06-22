const { Op } = require("sequelize");
const { Hotel, Destination } = require("../../db");
const api = require("../../../api/apiHotels.json");

const getHotelAll = async () => {
  try {
    const dbDataHotels = [];
    const verifyDb = await Hotel.findAll({
      include: [{ model: Destination, as: "destination" }],
    });
    if (verifyDb.length === 0) {
      for (const hotel of api) {
        const apiData = {
          name: hotel.hotel_name,
          image: hotel.photo1,
          email: hotel.email ? hotel.email : "Information not available.",
          address: hotel.addressline1
            ? hotel.addressline1
            : "Information not available.",
          phone: hotel.phone ? hotel.phone : "Information not available.",
          checkIn: hotel.checkin ? hotel.checkin : "Information not available.",
          checkOut: hotel.checkout
            ? hotel.checkout
            : "Information not available.",
          numberRooms: hotel.numberrooms ? hotel.numberrooms : 0,
          overview: hotel.overview,
          longitude: hotel.longitude,
          latitude: hotel.latitude,
          destination: {
            country: hotel.country,
            state: hotel.state,
            city: hotel.city,
            moneyType: hotel.rates_currency,
          },
        };
        console.log(apiData);
        const createdHotel = await Hotel.create(apiData, {
          include: [{ model: Destination, as: "destination" }],
        });

        dbDataHotels.push(createdHotel);
      }
      return dbDataHotels;
    } else {
      const createdHotels = await Hotel.findAll({
        include: [{ model: Destination, as: "destination" }],
      });
      return createdHotels;
    }
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
