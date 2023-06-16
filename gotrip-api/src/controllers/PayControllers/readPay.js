const { Pay } = require("../../db");
const readpay = async () => {
  

  try {
    const payments = await Pay.findAll();
    

    return payments
  
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { readpay };