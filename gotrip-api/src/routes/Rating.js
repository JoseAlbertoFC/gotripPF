const { Router } = require ("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const { postRating } = require("../handlers/RatingHandlers/postRating");
const { getRatings } = require("../handlers/RatingHandlers/getRatings");
const { deleteRating } = require("../handlers/RatingHandlers/deleteRating");

const ratingRoutes = Router();

ratingRoutes.post("/", tokenHeader, roleUserHandler(["user"]), postRating);
ratingRoutes.get("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), getRatings);
ratingRoutes.delete("/:id", tokenHeader, roleUserHandler(["host"]), deleteRating);

module.exports = ratingRoutes;

