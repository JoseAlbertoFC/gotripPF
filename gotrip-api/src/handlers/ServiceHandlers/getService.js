const { getAllServices } = require("../../controllers/ServiceControllers/getAllService");

const getServices = async (req, res) => {
    try {
      const result = await getAllServices();
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  getServices,
};