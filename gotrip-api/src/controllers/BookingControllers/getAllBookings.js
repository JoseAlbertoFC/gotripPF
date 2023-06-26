const { Booking } = require("../../db");

const getAllBookings = async () => {
  try {
    return await Booking.findAll();
  } catch (error) {
    // console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getAllBookings,
};
