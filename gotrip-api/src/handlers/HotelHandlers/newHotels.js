const {postHotelDB} = require("../../controllers/HotelControllers/indexControlers.js")

const postNewHotel = async(req,res) =>{
    const {name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId} = req.body
    
    try{
        const hotelNew = await postHotelDB(name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId)
        res.status(200).json(hotelNew);

    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    postNewHotel   
}