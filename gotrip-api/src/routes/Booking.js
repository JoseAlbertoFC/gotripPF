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

const bookingRoutes = Router();

/**
 * @swagger
 * tags:
 *   - name: Reservas
 *     description: No funciona desde aqui porque la ruta esta protegida y recibe un token; Pruebalo desde insomnia.
 * securityDefinitions:
 *   TokenAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * /booking:
 *   post:
 *     summary: Crea una nueva reserva
 *     tags:
 *       - Reservas
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateIn:
 *                 type: dateonly
 *               dateOut:
 *                 type: dateonly
 *               roomNum:
 *                 type: integer
 *               reservationStatus:
 *                 type: ENUM("Rejected" , "Pending" , "Approved"),
 *               gests:
 *                 type: integer
 *               hotelId:
 *                 type: string
 *               roomId:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookingWithDetails'
 *       500:
 *         description: Error al crear la reserva
 */

// Resto del código de la ruta de creación de reserva
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
  "/:id",
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

module.exports = bookingRoutes;
