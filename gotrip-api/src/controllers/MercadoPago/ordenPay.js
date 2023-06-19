require("dotenv").config();
const mercadopago = require("mercadopago");
const { ACCES_TOKEN } = process.env;

const ORDEN_PAGO = async (carrito,userId,bookingId) => {
  mercadopago.configure({
    access_token:ACCES_TOKEN
  });

  const items = carrito.map(item => ({
    title: item.nombre,
    unit_price: item.precio,
    currency_id: "MXN",
    quantity: item.cantidad,
  }));
  
 
  const notificationURL = "https://39fa-2806-2f0-49a0-bd3-9985-c8dc-e9e9-bdee.ngrok.io/urlPago/webhook-pago/";
const additionalData = {
  userId: userId,
  bookingId: bookingId
};

const encodedData = Object.entries(additionalData)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join("&");

const notificationURLWithParams = `${notificationURL}?${encodedData}`;

  const compra = await mercadopago.preferences.create({
    items,
    back_urls: {
      success: "http://localhost:3001/urlPago/succes",
      failure: "http://localhost:3001/urlPago/failure",
      pending: "http://localhost:3001/urlPago/pending"
    },
    notification_url: notificationURLWithParams
  });
  const status = {
    status:compra.body.redirect_urls,
    linkPago: compra.body.init_point,
    items:compra.body.items.map(item => ({title:item.title}))
  }
  return status
};

module.exports = ORDEN_PAGO;