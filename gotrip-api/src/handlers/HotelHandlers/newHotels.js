const {postHotelDB} = require("../../controllers/HotelControllers/indexControlers.js")

const postNewHotel = async(req,res) =>{
    const {userId,name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId} = req.body
    
    try{
        const hotelNew = await postHotelDB(userId,name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId)
        //res.status(200).json(hotelNew);
        if(hotelNew.state){
            res.status(200).json(hotelNew);
        }else {
            res.status(400).json(hotelNew);
        }
    }catch(error){        
        res.status(400).json({error: error});
    }    
}


module.exports = {
    postNewHotel   
}
