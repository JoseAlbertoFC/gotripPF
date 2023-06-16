const { Router } = require("express");
const { postBooking } = require("../handlers/BookingHandlers/postBooking");
const { getBookings } = require("../handlers/BookingHandlers/getBookings");
const { getBookingById } = require("../handlers/BookingHandlers/getBookingById")

const bookingRoutes = Router();

bookingRoutes.post("/", postBooking);
bookingRoutes.get("/", getBookings);
bookingRoutes.get("/:id", getBookingById);

module.exports = bookingRoutes;
