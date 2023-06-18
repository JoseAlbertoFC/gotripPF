const { User, Booking, Hotel, Rooms } = require("../../db");

const createBooking = async (
  dateIn,
  dateOut,
  roomNum,
  reservationStatus,
  gests,
  hotelId,
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
      userId,
    });

    const bookingWithDetails = await Booking.findOne({
      where: { id: newBooking.id },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email", "dniPasaport"],
        },
        {
          model: Hotel,
          as: "hotel",
          attributes: ["name", "checkIn", "checkOut", "email"],
        },
        {
          model: Rooms,
          as: "rooms",
          attributes: ["room", "price", "kindRoom"],
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
