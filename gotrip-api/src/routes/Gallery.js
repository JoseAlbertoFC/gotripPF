const { Router } = require("express");
// Aqui va el midleware de Gallery
const {
  getGalleries,
  getGalleriesById,
} = require("../handlers/GalleryHandlers/getGalleries");
const {
  deleteGalleries,
} = require("../handlers/GalleryHandlers/deleteGalleries");
const {postGallery}= require('../handlers/GalleryHandlers/postGallery');
const galleryRoutes = Router();

galleryRoutes.get("/", getGalleries).get("/:id", getGalleriesById).delete("/:id", deleteGalleries).post("/", postGallery)
module.exports = galleryRoutes;
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
