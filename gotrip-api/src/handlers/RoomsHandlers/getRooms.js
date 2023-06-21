const {getRoomsAll,getRoomRarams,getRoomById} = require("../../controllers/RoomsControllers/indexControlers.js")

const getRooms = async(req,res) =>{
    const querysRooms = req.query;
    const cantQuerys = Object.keys(querysRooms).length;
    console.log("***cantQuerys *********************");
    try{
        
        console.log(cantQuerys );
        console.log("***cantQuerys *********************");
        if(cantQuerys > 0){            
            const dataRooms = await getRoomRarams(querysRooms)
            res.status(200).json(dataRooms );
        }else{            
            const dataRooms = await getRoomsAll()
            res.status(200).json(dataRooms );
        }        
    }catch(error){

        res.status(400).json({error: error.mesage});
    }
}

const getRoomsId= async(req,res) =>{
    const {idRoom} = req.params ;
     console.log(idRoom);
     console.log("*********************");
    try{
        const dataRoomID = await getRoomById(idRoom)
        res.status(200).json(dataRoomID );
    }catch(error){
        res.status(400).json({error: error.mesage});
    }    
}





module.exports ={
    getRooms,
    getRoomsId
}

