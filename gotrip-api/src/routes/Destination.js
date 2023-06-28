const { Router } = require("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const {
  getDestinations,
  getDestinationsId,
} = require("../handlers/DestinationHandlers/getDestinations");
const {
  postDestination,
} = require("../handlers/DestinationHandlers/postDestination");
const {
  deleteOfDestination,
} = require("../handlers/DestinationHandlers/deleteOfDestination");
const {
  putDestination,
} = require("../handlers/DestinationHandlers/putDestination");

const destinationRoutes = Router();

destinationRoutes
  .get("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), getDestinations)
  .get("/:id", tokenHeader, roleUserHandler(["user", "admin", "host"]), getDestinationsId)
  .post("/", tokenHeader, roleUserHandler(["host"]),postDestination)
  .delete("/:id", tokenHeader, roleUserHandler(["host"]),deleteOfDestination)
  .put("/", tokenHeader, roleUserHandler(["host"]), putDestination);

module.exports = destinationRoutes;
