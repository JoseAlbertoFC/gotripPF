require("dotenv").config();
const mercadopago = require("mercadopago");
const { ACCES_TOKEN } = process.env;

// Esta funcion genera una orden de pago recibe el carrito y el userid junto con el bokingid para poder registrar los datos de la reserva que el cliente esta haciendo.
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
    const notificationURL = "https://eb0f-187-189-163-190.ngrok.io/urlPago/webhook-pago/";
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
      success: "https://gotrippf-production.up.railway.app/urlPago/succes",
      failure: "https://gotrippf-production.up.railway.app/urlPago/failure",
      pending: "https://gotrippf-production.up.railway.app/urlPago/pending"
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