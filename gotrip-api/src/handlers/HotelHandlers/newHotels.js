const {postHotelDB} = require("../../controllers/HotelControllers/indexControlers.js")

const postNewHotel = async(req,res) =>{
    const {name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId} = req.body
    console.log("ACA VAMOS*******************");
    try{
        console.log("::::::::::::::::::::HANDLER-ANTES");       
        const hotelNew = await postHotelDB(name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId)
        console.log("::::::::::::::::::::HANDLER-DESPUES");
        console.log(hotelNew );
        
        res.status(200).json(hotelNew);

    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    postNewHotel   
}