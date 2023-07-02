const { Router } = require("express");
const userRoute = require("./User");
const bookingRoutes = require("./Booking");
const payUser = require("./Pay");
const galleryRoutes = require("./Gallery");
const destinationRoutes = require("./Destination");
const payMercado = require("./MercadoPago");
const hotelRoute = require("./Hotel");
const ratingRoutes = require("./Rating");
const serviceRoutes = require("./Service");
const roomsRoute = require("./Rooms");

const router = Router();

router.use("/gallery", galleryRoutes);
router.use("/destination", destinationRoutes);
router.use("/urlPago", payMercado);
router.use("/user", userRoute);
router.use("/booking", bookingRoutes);
router.use("/payment", payUser);
router.use("/comments", ratingRoutes);
router.use("/service", serviceRoutes);
router.use("/hotel", hotelRoute);
router.use("/rooms",roomsRoute);

module.exports = router;
