const { Router } = require ("express");
// Aqui van todas la librerias que usaremso 
const { userNew } = require("../handlers/UserHandlers/createUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser } = require("../handlers/UserHandlers/readAllUser");
const { readallUserID } = require("../handlers/UserHandlers/readUserID");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");
const { restoreUserHandler } = require("../handlers/UserHandlers/restoreUser")
const { Loginuser } = require("../handlers/UserHandlers/loginUsers");

const tokenHeader = require("../handlers/UserHandlers/auth");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
// const FacebookStrategy = require('passport-facebook').Strategy;
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// const config = require('../controllers/GoogleAuth/google');
const { googleHandler } = require("../handlers/Google/googleHandler");
// const twilio = require('twilio');
// const WhatsappHandler = require("../handlers/WhatsappHandlers/WhatsappHandler")


const userRoute = Router();

userRoute.post("/login",Loginuser)
userRoute.post("/createNewUser", userNew)

userRoute.delete("/deleteUser/:id",tokenHeader,roleUserHandler(['admin','host']), deleteUserhandler)
userRoute.get("/readUser", tokenHeader, roleUserHandler(['admin', 'host']), readallUser)
userRoute.get("/readUser/:id", tokenHeader, roleUserHandler(['admin', 'host']), readallUserID)
userRoute.put("/updateUser/:id",tokenHeader,roleUserHandler(["user", 'admin','host']), updatedataUser)
userRoute.put("/restoreUser/:userId",tokenHeader, roleUserHandler(["host"]), restoreUserHandler)
userRoute.get('/profile', googleHandler);
// userRoute.get('/perfil', (req, res) => {
//   res.render('perfil', { user: req.user });
// });
// userRoute.get('/facebook', (req, res) => {
//   res.render('index');
// });
// userRoute.post('/webhooks/messages', WhatsappHandler)

module.exports = userRoute
