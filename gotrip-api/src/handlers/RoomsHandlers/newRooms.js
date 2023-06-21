

const newRooms = async(req,res) =>{
    
    const {idroom} = req.params ;
    try{
        
        console.log("*newRooms *********************");

        // const dataHotels = await hotelDelete(idHotel)
        // res.status(200).json(dataHotels );        
        
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    newRooms   
}