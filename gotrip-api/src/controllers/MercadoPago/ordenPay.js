require("dotenv").config();
const mercadopago = require("mercadopago");
const { ACCES_TOKEN } = process.env;

const ORDEN_PAGO = async (carrito) => {
  mercadopago.configure({
    access_token:ACCES_TOKEN
  });

  const items = carrito.map(item => ({
    title: item.nombre,
    unit_price: item.precio,
    currency_id: "MXN",
    quantity: item.cantidad
  }));

  const compra = await mercadopago.preferences.create({
    items,
    back_urls: {
      success: "http://localhost:3001/urlPago/succes",
      failure: "http://localhost:3001/urlPago/failure",
      pending: "http://localhost:3001/urlPago/pending"
    },
    notification_url: "https://9e22-2806-2f0-49a0-113b-881b-cdfc-c65c-e2ef.ngrok.io/urlPago/webhook-pago"
  });

  return compra.body.init_point
};

module.exports = ORDEN_PAGO;