

const deleteRooms = async(req,res) =>{
    
    const {idHotel} = req.params ;
    try{
        
        console.log("*DELETE *********************");
     
        // const dataHotels = await hotelDelete(idHotel)
        // res.status(200).json(dataHotels );        
        
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    deleteRooms   
}