const { Router } = require ("express");
const { postBooking } = require("../handlers/BookingHandlers/postBooking")

const bookingRoutes = Router();

bookingRoutes.post("/", postBooking)

module.exports = bookingRoutes;

