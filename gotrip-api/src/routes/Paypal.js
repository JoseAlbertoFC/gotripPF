const { Router } = require("express");
const { postOrderPaypal } = require("../handlers/Paypal/postOrder")
const { captureOrderPaypal } = require("../handlers/Paypal/captureOrder")


const paypalRoutes = Router();

paypalRoutes.post("/newOrder", postOrderPaypal);
paypalRoutes.get("/execute-payment", captureOrderPaypal)


module.exports = paypalRoutes;
