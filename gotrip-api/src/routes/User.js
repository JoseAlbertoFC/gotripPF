const { Router } = require ("express");
// Aqui va el midleware de User

const { userNew } = require("../handlers/UserHandlers/getUsers");
// Aqui va el midleware de User

const userRoute = Router();

userRoute.post("/createNewUser", userNew)

module.exports = userRoute