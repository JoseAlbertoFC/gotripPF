const {postHotelDB} = require("./newHotels.js")
const {getHotelById,getHotelParams,getHotelAll} = require("./getAllHotels.js")
const {hotelDelete} = require("./delHotels.js")
const {updateHotelBD} = require("./updHotels.js")

//falta update y delete

module.exports = {
    postHotelDB
    ,getHotelById
    ,getHotelParams
    ,getHotelAll
    ,hotelDelete
    ,updateHotelBD
};