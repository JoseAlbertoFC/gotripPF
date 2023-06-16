const { Router } = require("express");
const userRoute = require("./User");
const bookingRoutes = require("./Booking");
const payUser = require("./Pay");

/**LAAR */
const hotelRoute= require("./Hotel");  
const roomsRoute= require("./Rooms");  



const router = Router();


router.use("/user",userRoute)
router.use("/booking", bookingRoutes)
router.use("/payment", payUser)

/**LAAR*/
router.use("/hotel",hotelRoute);  
//router.use("/room",roomsRoute);  

module.exports = router;

