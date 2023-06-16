const { Router } = require("express");
const userRoute = require("./User");
const bookingRoutes = require("./Booking")
// Importar todos los routers;
// Ejemplo: const countriesRoutes = require("./Countries");

const router = Router();
// Configurar los routers
// Ejemplo: router.use("/countries", countriesRoutes);


router.use("/user",userRoute)
router.use("/booking", bookingRoutes)


module.exports = router;

