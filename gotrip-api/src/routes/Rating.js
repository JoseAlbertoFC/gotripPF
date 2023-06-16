const { Router } = require ("express");
const { postRating } = require("../handlers/RatingHandlers/postRating");
const { getRatings } = require("../handlers/RatingHandlers/getRatings");

const ratingRoutes = Router();

ratingRoutes.post("/", postRating);
ratingRoutes.get("/", getRatings);


module.exports = ratingRoutes;

