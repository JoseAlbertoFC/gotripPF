const { Booking, Hotel, Rooms, User } = require("../../db");

const getAllBookings = async () => {
  try {
    return await Booking.findAll({
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
  getAllBookings,
};
