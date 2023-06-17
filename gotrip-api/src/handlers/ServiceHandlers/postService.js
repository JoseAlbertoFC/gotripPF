const {
    createService,
  } = require("../../controllers/ServiceControllers/createService");
  
  const postService = async (req, res) => {
    const { name } = req.body;
    try {
      const result = await createService(name);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    postService,
  };