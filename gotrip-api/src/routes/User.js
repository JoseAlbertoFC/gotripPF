const { Router } = require ("express");
// Aqui va el midleware de User

const { userNew } = require("../handlers/UserHandlers/getUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser } = require("../handlers/UserHandlers/readUser");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");

// Aqui va el midleware de User

const userRoute = Router();

userRoute.post("/createNewUser", userNew)

userRoute.delete("/deleteUser/:id", deleteUserhandler)

userRoute.get("/readUser", readallUser)

userRoute.put("/updateUser/:id", updatedataUser)

module.exports = userRoute