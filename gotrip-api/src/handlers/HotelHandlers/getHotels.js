const {postHotelDB} = require("../../controllers/HotelControllers/indexControlers.js")

const getHotel = async(req,res) =>{
    try{
        res.status(200).json("primera prueba getHotel");
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}
const getHotelId= async(req,res) =>{
    const {idHotel} = req.params ;
    // console.log(idHotel);
    try{
        console.log("*******getHotelId***************");
        console.log(idHotel);
        console.log("**********************");
        const dataHotelID = await getHotelById(idHotel)
        res.status(200).json(dataHotelID);
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}





module.exports = {
    getHotel   
    ,getHotelId
}