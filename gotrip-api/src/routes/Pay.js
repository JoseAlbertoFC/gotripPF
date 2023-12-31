
// aqui van las librerias que usaremos en estas rutas 
const { Router } = require("express");
const { paymentNew } = require("../handlers/PayHandlers/postPayments");
const { readallPays } = require("../handlers/PayHandlers/readPayments");
const { updatedataPay } = require("../handlers/PayHandlers/updatePayments");
const { deletePayhandler } = require("../handlers/PayHandlers/deletePaysments");
const tokenHeader = require("../handlers/UserHandlers/auth");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");


const payUser = Router(); 
/**
 * @swagger
 * tags:
 *   - name: Pagos
 *     description: Operaciones relacionadas con pagos
 * /payment/newPay:
 *   post:
 *     summary: Crea un nuevo pago
 *     tags:
 *       - Pagos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               result:
 *                 type: object
 *                 properties:
 *                   total_paid_amount:
 *                     type: number
 *                   data_aprove:
 *                     type: string
 *                   metodo:
 *                     type: string
 *                   ip:
 *                     type: string
 *                   idpay:
 *                     type: string
 *                   order:
 *                     type: string
 *                   orderType:
 *                     type: string
 *                   operationType:
 *                     type: string
 *                   currentOperation:
 *                     type: string
 *                   net_received_amount:
 *                     type: number
 *                   userId:
 *                     type: string
 *                   bookingId:
 *                     type: string
 *               amount:
 *                 type: number
 *               paymentDate:
 *                 type: string
 *               paymentStatus:
 *                 type: string
 *               userId:
 *                 type: string
 *               bookingId:
 *                 type: string
 *             required:
 *               - result
 *               - amount
 *               - paymentDate
 *               - paymentStatus
 *               - userId
 *               - bookingId
 *     responses:
 *       200:
 *         description: Pago creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PayWithDetails'
 *       500:
 *         description: Error al crear el pago
 */

// Resto del código de la ruta de creación de pago

// Ruta protegida solo usuarios con login pueden generar pagos 

payUser.post("/newPay", tokenHeader, roleUserHandler(['user','admin', 'host']), paymentNew)
/**
 * @swagger
 * /payment/paymentsall:
 *   get:
 *     summary: Obtiene todos los pagos
 *     tags:
 *       - Pagos
 *     responses:
 *       200:
 *         description: Lista de pagos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PayWithDetails'
 *       500:
 *         description: Error al obtener la lista de pagos
 */

// Resto del código de la ruta de lectura de pagos

//Esta ruta cuenta con proteccion de rutas solo usuarios admin y host pueden acceder al historial de pagos 

payUser.get("/paymentsall", tokenHeader, roleUserHandler(['admin', 'host']), readallPays)
/**
 * @swagger
 * /payment/updatePay/{userid}:
 *   put:
 *     summary: Actualiza un pago por ID
 *     tags:
 *       - Pagos
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pago a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePayInput'
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PayWithDetails'
 *       500:
 *         description: Error al actualizar el pago
 *
 * @swagger
 * components:
 *   schemas:
 *     UpdatePayInput:
 *       type: object
 *       properties:
 *         userid:
 *           type: string
 *           description: ID del pago a actualizar
 *         amount:
 *           type: number
 *           description: Nuevo monto del pago
 *         paymentDate:
 *           type: string
 *           format: date
 *           description: Nueva fecha de pago (en formato YYYY-MM-DD)
 *         paymentStatus:
 *           type: string
 *           description: Nuevo estado de pago
 *       required:
 *         - userid
 *         - amount
 *         - paymentDate
 *         - paymentStatus
 */

// Resto del código de la ruta de actualización de pago

// Esta ruta cuenta con proteccion de rutas para actualizar un pago solo los usuarios admin y host tienen acceso 

payUser.put("/updatePay/:id", tokenHeader, roleUserHandler(['admin', 'host']) ,updatedataPay)
/**
 * @swagger
 * /payment/deletePay/{userId}:
 *   delete:
 *     summary: Elimina un pago por ID de usuario
 *     tags:
 *       - Pagos
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario asociado al pago a eliminar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeletePayInput'
 *     responses:
 *       200:
 *         description: Pago eliminado exitosamente
 *       500:
 *         description: Error al eliminar el pago
 *
 * @swagger
 * components:
 *   schemas:
 *     DeletePayInput:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID del usuario asociado al pago a eliminar
 *       required:
 *         - userId
 */

// Resto del código de la ruta de eliminación de pago


//Las ruta para Eliminar pagos esta protegida solo los usuarios admin y host pueden acceder a eliminar algun pago 

payUser.delete("/deletePay/:id", tokenHeader, roleUserHandler(['admin', 'host']) ,deletePayhandler)


module.exports = payUser;

