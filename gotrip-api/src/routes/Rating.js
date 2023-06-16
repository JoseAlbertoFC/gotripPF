const { Router } = require ("express");
const { postRating } = require("../handlers/RatingHandlers/postRating");

const ratingRoutes = Router();

ratingRoutes.post("/", postRating);



module.exports = ratingRoutes;

