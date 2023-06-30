const {
    restoreUserById,
  } = require("../../controllers/UserControllers/restoreUser");
  
  const restoreUserHandler = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const result = await restoreUserById(userId);
      if (!userId) {
        res.status(400).json({ error: "It is not possible to recover this User" });
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports = {
    restoreUserHandler,
  };