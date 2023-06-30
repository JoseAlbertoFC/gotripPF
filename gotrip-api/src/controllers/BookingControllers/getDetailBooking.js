const { Booking, Hotel, User, Rooms } = require("../../db");

const getDetailBooking = async (id) => {
  try {
    return await Booking.findByPk(id, {
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Hotel,
          as: "hotel",
        },
        {
          model: Rooms,
          as: "rooms",
        },
      ],
    });
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getDetailBooking,
};
