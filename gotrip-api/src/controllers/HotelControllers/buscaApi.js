const { Op } = require("sequelize");
const { Hotel, Destination,Rooms } = require("../../db");
const api = require("../../../api/apiHotels.json");

const validaApi= async () =>{
    try{
        const dbDataHotels = [];
        const verifyDb = await Hotel.findAll({
          include: [{ model: Destination, as: "destination" },{model: Rooms, as: "rooms" },],
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
              include: [{ model: Destination, as: "destination" },{model: Rooms, as: "rooms" },],
            });
    
            dbDataHotels.push(createdHotel);
          }
          return dbDataHotels;  
        }
    } catch (error) {
        throw Error(error.message);
      }
    }

    module.exports = {
    validaApi
      };
      