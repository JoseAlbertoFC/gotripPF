const { User, Booking, Hotel, Rooms } = require("../../db");

const createBooking = async (
  dateIn,
  dateOut,
  roomNum,
  reservationStatus,
  gests,
  hotelId,
  roomId,
  userId
) => {
  try {
    const newBooking = await Booking.create({
      dateIn,
      dateOut,
      roomNum,
      reservationStatus,
      gests,
      hotelId,
      roomId,
      userId,
    });

    const bookingWithDetails = await Booking.findOne({
      where: { id: newBooking.id },
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

    return bookingWithDetails;
  } catch (error) {
    console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createBooking,
};
