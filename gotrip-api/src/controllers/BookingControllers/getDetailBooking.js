const { Booking } = require("../../db");

const getDetailBooking = async (id) => {
  try {
    return await Booking.findByPk(id);
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getDetailBooking,
};
