const { Router } = require ("express");
// Aqui va el midleware de Destination
const {getDestinations, getDestinationsId} = require('../handlers/DestinationHandlers/getDestinations');
const {postDestination}= require('../handlers/DestinationHandlers/postDestination');
const {deleteOfDestination}= require('../handlers/DestinationHandlers/deleteOfDestination');
const {putDestination}= require('../handlers/DestinationHandlers/putDestination');
const destinationRoutes = Router();

destinationRoutes.get("/", getDestinations).get("/:id", getDestinationsId).post('/', postDestination).delete('/:id', deleteOfDestination).put('/', putDestination);

module.exports= destinationRoutes;
// Ejemplo:
// const { Router } = require ("express"); 
// const { getCountries, getCountryById } = require ("../handlers/Countries")

// const countriesRoutes = Router();

// countriesRoutes.get("/", getCountries);
// countriesRoutes.get("/:id", getCountryById); 
// otra ruta
// otra ruta


// module.exports = countriesRoutes;

//Borra este comentario guia al empezar a codear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!