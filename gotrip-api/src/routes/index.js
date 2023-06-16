const { Router } = require("express");
const userRoute = require("./User");
const bookingRoutes = require("./Booking");
const payUser = require("./Pay");
const ratingRoutes = require("./Rating")
// Importar todos los routers;
// Ejemplo: const countriesRoutes = require("./Countries");

const router = Router();
// Configurar los routers
// Ejemplo: router.use("/countries", countriesRoutes);


router.use("/user",userRoute);
router.use("/booking", bookingRoutes);
router.use("/payment", payUser);
router.use("/comments", ratingRoutes);


module.exports = router;

