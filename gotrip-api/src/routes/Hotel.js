const { Router } = require ("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const {putUpdateHotel  , 
        postNewHotel,
        getHotel,
        getHotelId,
        getDeletedHotel,
        restoreHotel,
        deleteHotel} = require("../handlers/HotelHandlers/indexHandlers.js")

const hotelRoute = Router();

hotelRoute.get('/findhotel', getHotel)

hotelRoute.get('/findhotel/:idHotel',getHotelId)

hotelRoute.post('/newhotel', tokenHeader, roleUserHandler(["admin", "host"]), postNewHotel)

hotelRoute.put('/updhotel', tokenHeader, roleUserHandler(["admin", "host"]), putUpdateHotel)

hotelRoute.delete('/delhotel/:idHotel', tokenHeader, roleUserHandler(["admin", "host"]), deleteHotel)

hotelRoute.put("/restoreHotel/:id", tokenHeader, roleUserHandler(["host"]), restoreHotel)

hotelRoute.get("/readDeletedHotel", tokenHeader, roleUserHandler(["host"]), getDeletedHotel)

module.exports = hotelRoute