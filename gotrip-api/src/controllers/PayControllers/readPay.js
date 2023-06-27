//El mopdelo de la base de datos User y Pay y Booking se importan 
const { Pay, User, Booking } = require("../../db");

const readpay = async () => {
  

    try {
    // Mandamos a traer toda la infotmacion de la base de datos de la tabla pagos.
    const payments = await Pay.findAll();
    //Retornamos los pagos obtenidos.
    return payments
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { readpay };
