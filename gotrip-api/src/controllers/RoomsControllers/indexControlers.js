const {getRoomsAll, getRoomById, getRoomRarams} = require("./getAllRooms.js")
const {postNewRoomDB} = require("./newRooms.js")
const {putUpdateRooms} = require("./updRooms.js")
const {roomDelete} =require("./delRooms.js")
module.exports ={
    getRoomsAll,
    getRoomById,
    postNewRoomDB,
    getRoomRarams,
    putUpdateRooms,
    roomDelete
}