const getHotel = async(req,res) =>{
    try{
        res.status(200).json("primera prueba getHotel");
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}


module.exports = {
    getHotel   
}