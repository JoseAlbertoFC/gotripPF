const { Router } = require ("express");
const { postService } = require ("../handlers/ServiceHandlers/postService");
const { getServices } = require ("../handlers/ServiceHandlers/getService");

const serviceRoutes = Router();

serviceRoutes.post("/", postService);
serviceRoutes.get("/", getServices)




module.exports = serviceRoutes;

