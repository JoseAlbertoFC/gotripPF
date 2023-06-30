const {
  restoreHotelById,
} = require("../../controllers/HotelControllers/indexControlers.js");

const restoreHotel = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await restoreHotelById(id);
    if (!id) {
      res.status(400).json({ error: "It is not possible to recover this Hotel" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  restoreHotel,
};
