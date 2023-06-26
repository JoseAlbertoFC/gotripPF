const {
  destroyBooking,
} = require("../../controllers/BookingControllers/destroyBooking");

const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    //const result = await destroyBooking(id.toUpperCase());
    const result = await destroyBooking(id);
    if (result === 0) return res.status(400).json("This booking was not deleted correctly");
    res.status(200).json("This booking was successfully removed");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteBooking,
};
