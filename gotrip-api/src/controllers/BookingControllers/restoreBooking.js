const { Booking } = require("../../db");

const paranoidBooking = async (id) => {
  try {
    const bookingToRestore = await Booking.findByPk(
      id,
      { paranoid: false },
      
    );
    return await bookingToRestore.restore();
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  paranoidBooking,
};
