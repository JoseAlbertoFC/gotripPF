const { Pay } = require("../../db");

const newPay = async (
  amount,
  paymentDate,
  paymentStatus,



) => {
  try {
    const newPay = new Pay({
     amount: amount,
     paymentDate: paymentDate,
     paymentStatus: paymentStatus,
    });

    const savedPay = await newPay.save();

    return savedPay;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { newPay };
