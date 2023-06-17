const { Booking } = require("../../db");

const destroyBooking = async (id) => {
  try {
    return await Booking.destroy({where: {id: id}});
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  destroyBooking,
};