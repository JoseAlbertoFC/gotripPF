const {getHotel } = require("./getHotels.js")
const {deleteHotel} = require("./delHotels.js")
const {postNewHotel} = require("./newHotels.js")
const {putUpdateHotel} = require("./updHotels.js")



module.exports = {
    putUpdateHotel  , 
    postNewHotel,
    getHotel,
    deleteHotel
}