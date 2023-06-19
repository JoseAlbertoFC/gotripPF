const { Router } = require ("express");

const {putUpdateHotel  , 
        postNewHotel,
        getHotel,
        getHotelId,
        deleteHotel} = require("../handlers/HotelHandlers/indexHandlers.js")

const hotelRoute = Router();

hotelRoute.post('/newhotel',postNewHotel)

hotelRoute.get('/findhotel',getHotel)

hotelRoute.get('/findhotel/:idHotel',getHotelId)

hotelRoute.put('/updhotel',putUpdateHotel)

hotelRoute.delete('/delhotel/:idHotel',deleteHotel)



module.exports = hotelRoute