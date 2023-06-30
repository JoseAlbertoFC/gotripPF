const { Hotel } = require("../../db");

const restoreHotelById = async (id) => {
  try {
    const hotelToRestore = await Hotel.findByPk(id, { paranoid: false });
    return await hotelToRestore.restore();
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  restoreHotelById,
};
