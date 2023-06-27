// Traemos la base de datos de pagos.
const { Pay } = require("../../db");

// Recibimos por parametos ==> id,amount,paymentDate,paymentStatus
const updatePay = async ( 
  {id,amount,paymentDate,paymentStatus}
  ) => {
    try {
    // Consultamos por el id recibido para hacer la actualizacion del pago en la base de datos.
    const pay= await Pay.findByPk(id);
    if (pay) {
     pay.amount = amount;
     pay.paymentDate = paymentDate;
        pay.paymentStatus = paymentStatus;
     // Una vez realizado los cambios se guardan en la base de datos.
        await pay.save();
      // Retornamos los nuevos datos del pago.
      return (pay);
    } else {
      return (pay);
    }
  } catch (error) {
    console.error('Error al actualizar el pago:', error);
    throw new Error({ error: error.message });
  }
};

module.exports = { updatePay };
