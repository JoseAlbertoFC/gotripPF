const { Router } = require ("express");

const {putUpdateHotel  , 
        postNewHotel,
        getHotel,
        deleteHotel} = require("../handlers/HotelHandlers/indexHandlers.js")

const hotelRoute = Router();

hotelRoute.post('/newhotel',postNewHotel)

hotelRoute.get('/findhotel',getHotel)

hotelRoute.get('/findhotel/:id',getHotel)

hotelRoute.put('/updhotel',putUpdateHotel)

hotelRoute.delete('/dlthotel',deleteHotel)



module.exports = hotelRoute