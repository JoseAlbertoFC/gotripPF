const deleteHotel = async(req,res) =>{
    try{
        res.status(200).json("primera prueba deleteHotel");
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    deleteHotel   
}