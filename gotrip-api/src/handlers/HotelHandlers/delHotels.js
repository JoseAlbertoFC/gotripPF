const {hotelDelete} = require("../../controllers/HotelControllers/indexControlers.js")

const deleteHotel = async(req,res) =>{
    
    const {idHotel} = req.params ;
    try{
        
        console.log("*DELETE *********************");
        console.log(idHotel);
        const dataHotels = await hotelDelete(idHotel)
        res.status(200).json(dataHotels );        
        
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    deleteHotel   
}