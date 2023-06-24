const { postNewRoomDB} = require("../../controllers/RoomsControllers/indexControlers.js")

const postNewRoom = async(req,res) =>{
    const {room, price,numRooms,kindRoom,description, status, hotelId} = req.body
    
    // console.log("handler");
    // console.log("req.body----> " + room+"****"+price+"****"+numRooms+"****"+status+"****"+hotelId+"****");
    try{
        const RoomNew = await postNewRoomDB(room, price,numRooms,kindRoom,description, status, hotelId)
        console.log("RoomNew---- " +RoomNew);
        res.status(200).json(RoomNew);

    }catch(error){        
        res.status(400).json({error: error});
    }    
}


module.exports = {
    postNewRoom   
}
