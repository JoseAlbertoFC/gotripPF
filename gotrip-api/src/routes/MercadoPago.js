const { Router } = require ("express");
const  {payment}  = require("../handlers/MercadoPago/postMercadopago");
const { webhook } = require("../handlers/MercadoPago/postWebhook");
const { succes } = require("../handlers/MercadoPago/getSucces");
const { failure } = require("../handlers/MercadoPago/getFailure");
const { pending } = require("../handlers/MercadoPago/getPending");

// Aqui va el midleware de Pay

// Ejemplo:
// const { Router } = require ("express"); 
// const { getCountries, getCountryById } = require ("../handlers/Countries")

// const countriesRoutes = Router();

const payMercado = Router(); 


/**
 * @swagger
 * tags:
 *   - name: Pasarela de Pago
 *     description: Gestión de pagos y órdenes de pago
 * /orden-pago:
 *   post:
 *     summary: Genera una orden de pago
 *     tags:
 *       - Pasarela de Pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrdenPagoInput'
 *     responses:
 *       200:
 *         description: Orden de pago generada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrdenPagoResponse'
 *       500:
 *         description: Error al generar la orden de pago
 *
 * @swagger
 * components:
 *   schemas:
 *     OrdenPagoInput:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID del usuario
 *         bookingId:
 *           type: string
 *           description: ID de la reserva
 *         carrito:
 *           type: array
 *           description: Lista de elementos del carrito
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: ID del artículo
 *               nombre:
 *                 type: string
 *                 description: Nombre del artículo
 *               precio:
 *                 type: number
 *                 description: Precio del artículo
 *               cantidad:
 *                 type: number
 *                 description: Cantidad del artículo
 *
 *     OrdenPagoResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: object
 *           description: Estado de la orden de pago
 *         linkPago:
 *           type: string
 *           description: Enlace de pago generado
 *         items:
 *           type: array
 *           description: Lista de artículos de la orden de pago
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título del artículo
 */


payMercado.post("/mercadoPago", payment)
/**
 * @swagger
 * tags:
 *   - name: Pasarela de Pago
 *     description: Gestión de pagos y órdenes de pago
 * /urlPago/webhook-pago:
 *   post:
 *     summary: Webhook para recibir notificaciones de pagos
 *     tags:
 *       - Pasarela de Pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WebhookPagoInput'
 *     responses:
 *       200:
 *         description: Pago aprobado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WebhookPagoResponse'
 *       500:
 *         description: Error en el webhook de pago
 *
 * @swagger
 * components:
 *   schemas:
 *     WebhookPagoInput:
 *       type: object
 *       properties:
 *         payment:
 *           type: object
 *           description: Información del pago recibido
 *         id:
 *           type: string
 *           description: ID del pago
 *         bookingId:
 *           type: string
 *           description: ID de la reserva asociada al pago
 *         userId:
 *           type: string
 *           description: ID del usuario asociado al pago
 *
 *     WebhookPagoResponse:
 *       type: object
 *       properties:
 *         Payment:
 *           type: string
 *           description: Estado del pago aprobado
 */


payMercado.post("/webhook-pago",webhook)

payMercado.get("/succes",succes)

payMercado.get("/failure",failure)

payMercado.get("/pending",pending)



// countriesRoutes.get("/", getCountries);
// countriesRoutes.get("/:id", getCountryById);
// otra ruta
// otra ruta


// module.exports = countriesRoutes;
module.exports = payMercado;