const {getRooms,getRoomsId} = require("./getRooms.js")
const {deleteRooms}= require("./delRooms.js")
const {newRooms}=require("./newRooms.js")
const{putUpdateRooms}=require("./updRooms.js")



module.exports ={
    getRooms,
    getRoomsId,    
    newRooms,
    putUpdateRooms,
    deleteRooms
}