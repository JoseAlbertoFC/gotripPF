const { Pay } = require("../../db");

const deletePayDB = async (userId) => {
  try {
    const deletedPay = await Pay.destroy({ where: { id: userId } });

    return deletedPay;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};
 
module.exports = { deletePayDB };
