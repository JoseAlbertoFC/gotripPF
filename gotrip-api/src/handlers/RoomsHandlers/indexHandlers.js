const {getRooms,getRoomsId} = require("./getRooms.js")
const {deleteRooms}= require("./delRooms.js")
const {postNewRoom}=require("./newRooms.js")
const{putUpdateRooms}=require("./updRooms.js")



module.exports ={
    getRooms,
    getRoomsId,    
    postNewRoom,
    putUpdateRooms,
    deleteRooms
}