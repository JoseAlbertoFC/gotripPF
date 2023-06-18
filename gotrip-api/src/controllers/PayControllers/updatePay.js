const { Pay } = require("../../db");

const updatePay = async ( 
  {id,amount,paymentDate,paymentStatus}
  ) => {
  


  try {
    const pay= await Pay.findByPk(id);
    if (pay) {
     pay.amount = amount;
     pay.paymentDate = paymentDate;
     pay.paymentStatus = paymentStatus;
    
      
      await pay.save();
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
