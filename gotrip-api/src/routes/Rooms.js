const { Router } = require ("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const {getRooms,getRoomsId,postNewRoom,putRoomUpdate,deleteRooms} = require("../handlers/RoomsHandlers/indexHandlers.js")

const roomsRoute =Router();

roomsRoute.get('/findRooms', tokenHeader, roleUserHandler(["user", "admin", "host"]), getRooms)
roomsRoute.get('/findRooms/:idRoom', tokenHeader, roleUserHandler(["user", "admin", "host"]), getRoomsId)
roomsRoute.post('/newRooms', tokenHeader, roleUserHandler(["admin", "host"]), postNewRoom)
roomsRoute.put('/updRooms', tokenHeader, roleUserHandler(["admin", "host"]),putRoomUpdate)
roomsRoute.delete('/delRooms/:idRoom', tokenHeader, roleUserHandler(["admin", "host"]), deleteRooms)




module.exports = roomsRoute 