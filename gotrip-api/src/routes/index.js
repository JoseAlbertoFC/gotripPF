const { Router } = require("express");
const userRoute = require("./User");
// Importar todos los routers;
// Ejemplo: const countriesRoutes = require("./Countries");

const router = Router();
// Configurar los routers
// Ejemplo: router.use("/countries", countriesRoutes);


router.use("/user",userRoute)


module.exports = router;

