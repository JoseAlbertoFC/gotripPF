// Importamos las tablas de Pay de User y de Bookings
const { Pay, User, Booking } = require("../../db");

// Le mandamos datos por parametro a la funcion el objeto result trae toda la informacion.
const newPay = async (
  result,
  amount,
  paymentDate,
  paymentStatus,
  userId,bookingId


) => {
  // Recibe el Pago con Todos los  datos  del recibo.
  try {
    const newPay = new Pay({
     amount: result.total_paid_amount,
     paymentDate: result.data_aprove,
     paymentStatus: result.metodo,
     ip: result.ip,
     idpay: result.idpay,
     orderNumber: result.order,
     orderType: result.orderType,
     operationType: result.operationType,
     metodo: result.metodo,
     currentOperation:result.currentOperation,
     data_aprove:result.data_aprove,
     total_paid_amount:result.total_paid_amount,
     net_received_amount:result.net_received_amount,
     userId: result.userId,
     bookingId:result.bookingId,
    });
    // Guardamos en la base de datos el nuevo pago que acabamos de generar.
    const savedPay = await newPay.save();

    // Tenemos la relacion con la tabla user y bookings para agregar estos datos a nuestro recibo.
    const payWithDetails = await Pay.findOne({
      where: { id: newPay.id },
      include: [
        { model: User, as: 'user', attributes: ['name', 'email', 'dniPasaport'] },
        { model: Booking, as: 'booking', attributes: ['roomNum', 'reservationStatus','gests'] },
      ],
    });

    // Retornamos el pago realizado junto con la relacion de las demas tablas user y bookings.
    return payWithDetails;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { newPay };
