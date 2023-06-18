const { Pay , User , Booking } = require("../../db");

const newPay = async (
  amount,
  paymentDate,
  paymentStatus,
  userId,bookingId


) => {
  try {
    const newPay = new Pay({
     amount: amount,
     paymentDate: paymentDate,
     paymentStatus: paymentStatus,
     userId: userId,
     bookingId:bookingId,
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
