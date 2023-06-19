const {getHotelById,getHotelParams,getHotelAll} = require("../../controllers/HotelControllers/indexControlers.js")

const getHotel = async(req,res) =>{
    
    const querysHotel = req.query;
    const cantQuerys = Object.keys(querysHotel).length;

    try{
        if(cantQuerys > 0){            
            const dataHotels = await getHotelParams(querysHotel)
            res.status(200).json(dataHotels );
        }else{            
            const dataHotels = await getHotelAll()
            res.status(200).json(dataHotels );
        }        
        
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}

const getHotelId= async(req,res) =>{
    const {idHotel} = req.params ;
    // console.log(idHotel);
    try{
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