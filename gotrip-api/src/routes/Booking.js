const { Router } = require("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const { postBooking } = require("../handlers/BookingHandlers/postBooking");
const { getBookings } = require("../handlers/BookingHandlers/getBookings");
const { getBookingById } = require("../handlers/BookingHandlers/getBookingById");
const { deleteBooking } = require("../handlers/BookingHandlers/deleteBooking");
const { putBooking } = require("../handlers/BookingHandlers/putBooking");

const bookingRoutes = Router();

bookingRoutes.post("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), postBooking);
bookingRoutes.get("/", tokenHeader, roleUserHandler(["host"]), getBookings);
bookingRoutes.get("/:id", tokenHeader, roleUserHandler(["user", "admin", "host"]), getBookingById);
bookingRoutes.delete("/:id", tokenHeader, roleUserHandler(["admin", "host"]), deleteBooking);
bookingRoutes.put("/updatebooking/:id", tokenHeader, roleUserHandler(["user", "admin", "host"]), putBooking);

module.exports = bookingRoutes;
