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
 * /orden-pago:
 *   post:
 *     summary: Genera una orden de pago
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
 */

// Resto del código de la función ORDEN_PAGO


payMercado.post("/mercadoPago", payment)
/**
 * @swagger
 * /urlPago/webhook-pago:
 *   post:
 *     summary: Webhook para recibir notificaciones de pagos
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
 */

// Resto del código de la función WEBHOOK_PAGO


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