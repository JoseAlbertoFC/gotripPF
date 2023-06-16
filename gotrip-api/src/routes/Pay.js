const { Router } = require ("express");
const { paymentNew } = require("../handlers/PayHandlers/postPayments");
const { readallPays } = require("../handlers/PayHandlers/readPayments");
const { updatedataPay } = require("../handlers/PayHandlers/updatePayments");
const { deletePayhandler } = require("../handlers/PayHandlers/deletePaysments");
// Aqui va el midleware de Pay

// Ejemplo:
// const { Router } = require ("express"); 
// const { getCountries, getCountryById } = require ("../handlers/Countries")

// const countriesRoutes = Router();

const payUser = Router(); 

payUser.post("/newPay", paymentNew)

payUser.get("/paymentsall", readallPays)

payUser.put("/updatePay/:id",updatedataPay)

payUser.delete("/deletePay/:id",deletePayhandler)


// countriesRoutes.get("/", getCountries);
// countriesRoutes.get("/:id", getCountryById);
// otra ruta
// otra ruta


// module.exports = countriesRoutes;
module.exports = payUser;

//Borra este comentario guia al empezar a codear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!