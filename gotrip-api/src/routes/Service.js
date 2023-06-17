const { Router } = require ("express");
const { postService } = require ("../handlers/ServiceHandlers/postService")

const serviceRoutes = Router();

serviceRoutes.post("/", postService);



module.exports = serviceRoutes;

