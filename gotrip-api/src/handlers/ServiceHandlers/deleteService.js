const {
    destroyService,
  } = require("../../controllers/ServiceControllers/destroyService");
  
  const deleteService = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await destroyService(id.toUpperCase());
      if (result === 0)
        return res.status(400).json("This service was not deleted correctly");
      res.status(200).json("This service was successfully removed");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    deleteService,
  };
  