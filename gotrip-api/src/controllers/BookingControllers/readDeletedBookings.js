const { Booking } = require("../../db");
const { Op } = require("sequelize");

const readDeletedBookings = async () => {
  try {
    const bookingDeleted = await Booking.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
    });

    return bookingDeleted;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  readDeletedBookings,
};
