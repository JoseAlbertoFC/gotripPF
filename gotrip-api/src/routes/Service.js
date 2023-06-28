const { Router } = require("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const { postService } = require("../handlers/ServiceHandlers/postService");
const { getServices } = require("../handlers/ServiceHandlers/getService");
const { deleteService } = require("../handlers/ServiceHandlers/deleteService");

const serviceRoutes = Router();

serviceRoutes.post("/", tokenHeader, roleUserHandler(["admin", "host"]), postService);
serviceRoutes.get("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), getServices);
serviceRoutes.delete("/:id", tokenHeader, roleUserHandler(["admin", "host"]), deleteService)

module.exports = serviceRoutes;