const { Pay , User , Booking } = require("../../db");

const newPay = async (
  result,
  amount,
  paymentDate,
  paymentStatus,
  userId,bookingId


) => {
  
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

    const savedPay = await newPay.save();

    const payWithDetails = await Pay.findOne({
      where: { id: newPay.id },
      include: [
        { model: User, as: 'user', attributes: ['name', 'email', 'dniPasaport'] },
        { model: Booking, as: 'booking', attributes: ['roomNum', 'reservationStatus','gests'] },
      ],
    });

    return payWithDetails;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { newPay };
