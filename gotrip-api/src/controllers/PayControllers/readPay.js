const { Pay, User,Booking} = require("../../db");

const readpay = async () => {
  

  try {
    const payments = await Pay.findAll();
   
   

 
   
    
  

    
    
    return payWithDetails
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { readpay };
