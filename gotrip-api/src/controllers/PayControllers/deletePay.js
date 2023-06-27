// traemos el modelo de pay para obtener los pagos.
const { Pay } = require("../../db");


// Recibimos el Id del pago que deceamos eliminar.
const deletePayDB = async (userId) => {
    try {
      // Buscamos por el id en la base de datos para destruir el pago.
    const deletedPay = await Pay.destroy({ where: { id: userId } });
    // Retornamos la respuesta del pago que se eminino en la base de datos.
    return deletedPay;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};
 
module.exports = { deletePayDB };
