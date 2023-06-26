const {getRooms,getRoomsId} = require("./getRooms.js")
const {deleteRooms}= require("./delRooms.js")
const {postNewRoom}=require("./newRooms.js")
const{putRoomUpdate}=require("./updRooms.js")



module.exports ={
    getRooms,
    getRoomsId,    
    postNewRoom,
    putRoomUpdate,
    deleteRooms
}