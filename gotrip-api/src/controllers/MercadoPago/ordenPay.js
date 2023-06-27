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
  
  // En este apartado en desarrollo tienes que correr el ngrok en una consola aparte y copiar el url que te brinda.
  const notificationURL = "https://2777-2806-2f0-49a0-708-150c-b560-33bf-30a6.ngrok.io/urlPago/webhook-pago/";
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