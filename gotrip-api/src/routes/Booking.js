const { Router } = require("express");
const { postBooking } = require("../handlers/BookingHandlers/postBooking");
const { getBookings } = require("../handlers/BookingHandlers/getBookings");
const { getBookingById } = require("../handlers/BookingHandlers/getBookingById");
const { deleteBooking } = require("../handlers/BookingHandlers/deleteBooking");
const { putBooking } = require("../handlers/BookingHandlers/putBooking");

const bookingRoutes = Router();

bookingRoutes.post("/", postBooking);
bookingRoutes.get("/", getBookings);
bookingRoutes.get("/:id", getBookingById);
bookingRoutes.delete("/:id", deleteBooking);
bookingRoutes.put("/updatebooking/:id", putBooking);

module.exports = bookingRoutes;
