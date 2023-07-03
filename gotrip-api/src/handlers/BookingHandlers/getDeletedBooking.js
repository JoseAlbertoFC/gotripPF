const { readDeletedBookings} = require("../../controllers/BookingControllers/readDeletedBookings");

const getDeletedBookings = async (req, res) => {
  try {
    const result = await readDeletedBookings();
    if (result.length === 0)
      return res
        .status(401)
        .json({ menssage: "No Existen Reservas eliminadas" });

    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getDeletedBookings,
};
