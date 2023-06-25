const { postNewRoomDB} = require("../../controllers/RoomsControllers/indexControlers.js")

const postNewRoom = async(req,res) =>{
    const {room,price,numRooms,roomsInUse,description,status,hotelId,ServicesRoom} = req.body
    
    // console.log("handler");
    // console.log("req.body----> " + room+"****"+price+"****"+numRooms+"****"+status+"****"+hotelId+"****");
    try{
        const RoomNew = await postNewRoomDB(room,price,numRooms,roomsInUse,description,status,hotelId,ServicesRoom)
        // console.log("RoomNew---- " +RoomNew);
        if(RoomNew.state){
            res.status(200).json(RoomNew);
        }else {
            res.status(400).json(RoomNew);
        }
        

    }catch(error){        
        res.status(400).json({error: error});
    }    
}


module.exports = {
    postNewRoom   
}
