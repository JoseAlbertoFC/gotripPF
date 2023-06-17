const { Router } = require("express");
const userRoute = require("./User");
const bookingRoutes = require("./Booking");
const payUser = require("./Pay");

const payMercado = require("./MercadoPago");



/**LAAR */
const hotelRoute= require("./Hotel");  
const roomsRoute= require("./Rooms");  



const ratingRoutes = require("./Rating")
const serviceRoutes = require("./Service")

// Importar todos los routers;
// Ejemplo: const countriesRoutes = require("./Countries");


const router = Router();



router.use("/user",userRoute)
router.use("/booking", bookingRoutes)
router.use("/payment", payUser)
router.use("/urlPago",payMercado)

router.use("/user",userRoute);
router.use("/booking", bookingRoutes);
router.use("/payment", payUser);
router.use("/comments", ratingRoutes);
router.use("/service", serviceRoutes);


/**LAAR*/
router.use("/hotel",hotelRoute);  
//router.use("/room",roomsRoute);  

module.exports = router;

