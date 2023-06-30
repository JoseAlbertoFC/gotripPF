const { Router } = require ("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const {putUpdateHotel  , 
        postNewHotel,
        getHotel,
        getHotelId,
        restoreHotel,
        deleteHotel} = require("../handlers/HotelHandlers/indexHandlers.js")

const hotelRoute = Router();

hotelRoute.post('/newhotel', tokenHeader, roleUserHandler(["admin", "host"]), postNewHotel)

hotelRoute.get('/findhotel',tokenHeader, roleUserHandler(["user", "admin", "host"]), getHotel)

hotelRoute.get('/findhotel/:idHotel', tokenHeader, roleUserHandler(["user", "admin", "host"]),getHotelId)

hotelRoute.put('/updhotel', tokenHeader, roleUserHandler(["admin", "host"]), putUpdateHotel)

hotelRoute.delete('/delhotel/:idHotel', tokenHeader, roleUserHandler(["admin", "host"]), deleteHotel)

hotelRoute.put("/restoreHotel/:id", tokenHeader, roleUserHandler(["host"]), restoreHotel)

module.exports = hotelRoute