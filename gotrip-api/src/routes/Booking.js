const { Router } = require("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const { postBooking } = require("../handlers/BookingHandlers/postBooking");
const { getBookings } = require("../handlers/BookingHandlers/getBookings");
const {
  getBookingById,
} = require("../handlers/BookingHandlers/getBookingById");
const { deleteBooking } = require("../handlers/BookingHandlers/deleteBooking");
const { putBooking } = require("../handlers/BookingHandlers/putBooking");
const {
  restoreBooking,
} = require("../handlers/BookingHandlers/restoreBooking");
const {
  getDeletedBookings,
} = require("../handlers/BookingHandlers/getDeletedBooking");

const bookingRoutes = Router();

bookingRoutes.post(
  "/",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  postBooking
);
bookingRoutes.get(
  "/",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  getBookings
);
bookingRoutes.get(
  "/searchBooking/:id",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  getBookingById
);
bookingRoutes.delete(
  "/:id",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  deleteBooking
);
bookingRoutes.put(
  "/updatebooking/:id",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  putBooking
);
bookingRoutes.put(
  "/restorebooking/:id",
  tokenHeader,
  roleUserHandler(["host"]),
  restoreBooking
);
bookingRoutes.get(
  "/getDeletedBookigs",
  tokenHeader,
  roleUserHandler(["host"]),
  getDeletedBookings
);

module.exports = bookingRoutes;
