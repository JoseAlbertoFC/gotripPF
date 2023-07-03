const {
  getDeletedUsers,
} = require("../../controllers/UserControllers/readDeletedUsers");

const readDeletedHandler = async (req, res) => {
  try {
    const result = await getDeletedUsers();

    if (result.length === 0)
      return res.status(401).json({ menssage: "No Existen usuarios eliminados" });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { readDeletedHandler };
