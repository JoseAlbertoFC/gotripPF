const { Router } = require ("express");
const {getRooms,getRoomsId,postNewRoom,putRoomUpdate,deleteRooms} = require("../handlers/RoomsHandlers/indexHandlers.js")

const roomsRoute =Router();

roomsRoute.get('/findRooms',getRooms)
roomsRoute.get('/findRooms/:idRoom',getRoomsId)
roomsRoute.post('/newRooms',postNewRoom)
roomsRoute.put('/updRooms',putRoomUpdate)
roomsRoute.delete('/delRooms/:idRoom',deleteRooms)




module.exports = roomsRoute 