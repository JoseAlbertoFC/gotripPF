// Las  librerias que utilizaremos aqui se importan
const mercadopago = require("mercadopago");
const { newPay } = require("../PayControllers/postPAy");
const { envioCorreo } = require("../EnvioCorreos/postCorreos");

// La funcion de pago captura el id  el pago el bokingid y el userid para poder generar el recibo con la informacion de pago.

const WEBHOOK_PAGO = async (payment, id, bookingId, userId, email, name) => {
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(id);
      dataPay = {
        ip: data.body.additional_info.ip_address,
        idpay: data.body.id,
        order: data.body.order.id,
        orderType: data.body.order.type,
        operationType: data.body.operation_type,
        metodo: data.body.payment_method_id,
        currentOperation: data.body.currency_id,
        data_aprove: data.body.date_approved,
        total_paid_amount: data.body.transaction_details.total_paid_amount,
        net_received_amount: data.body.transaction_details.net_received_amount,
        email: email,
        name: name,
        userId: userId,
        bookingId: bookingId,
      };
    }
    // Se envia la data del recibo de pago a la funcion para crear el nuego pago en la base de datos.
    const pay = await newPay(dataPay);
    // se Mandan los datos a la funcion correo  para poder enviar en automatico el correo una vez que realiza el pago.
    const emailData = await envioCorreo(dataPay);
    // Retornamos el mensaje de pago aprovado para el controlador
    return { Payment: "Aprovado" };
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = WEBHOOK_PAGO;
