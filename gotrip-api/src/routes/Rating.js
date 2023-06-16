const { Router } = require ("express");
const { postRating } = require("../handlers/RatingHandlers/postRating");
const { getRatings } = require("../handlers/RatingHandlers/getRatings");
const { deleteRating } = require("../handlers/RatingHandlers/deleteRating");

const ratingRoutes = Router();

ratingRoutes.post("/", postRating);
ratingRoutes.get("/", getRatings);
ratingRoutes.delete("/:id", deleteRating);

module.exports = ratingRoutes;

