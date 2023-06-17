const { Router } = require("express");
const { postService } = require("../handlers/ServiceHandlers/postService");
const { getServices } = require("../handlers/ServiceHandlers/getService");
const { deleteService } = require("../handlers/ServiceHandlers/deleteService");

const serviceRoutes = Router();

serviceRoutes.post("/", postService);
serviceRoutes.get("/", getServices);
serviceRoutes.delete("/:id", deleteService)

module.exports = serviceRoutes;