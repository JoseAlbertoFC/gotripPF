const { Router } = require ("express");
const  {payment}  = require("../handlers/MercadoPago/postMercadopago");
const { webhook } = require("../handlers/MercadoPago/postWebhook");
const { succes } = require("../handlers/MercadoPago/getSucces");
const { failure } = require("../handlers/MercadoPago/getFailure");
const { pending } = require("../handlers/MercadoPago/getPending");

// Aqui va el midleware de Pay

// Ejemplo:
// const { Router } = require ("express"); 
// const { getCountries, getCountryById } = require ("../handlers/Countries")

// const countriesRoutes = Router();

const payMercado = Router(); 

payMercado.post("/mercadoPago", payment)

payMercado.post("/webhook-pago",webhook)

payMercado.get("/succes",succes)

payMercado.get("/failure",failure)

payMercado.get("/pending",pending)



// countriesRoutes.get("/", getCountries);
// countriesRoutes.get("/:id", getCountryById);
// otra ruta
// otra ruta


// module.exports = countriesRoutes;
module.exports = payMercado;