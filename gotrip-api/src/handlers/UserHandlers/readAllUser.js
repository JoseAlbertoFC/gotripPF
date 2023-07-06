const {
  readUser,
  googleData,
} = require("../../controllers/UserControllers/readAllUser");

// Porfa crea un archivo para cada handler
const readallUser = async (req, res) => {
  try {
    const result = await readUser();

    if (result.length === 0)
      return res
        .status(404)
        .json({ menssage: "Lo siento No existe ningun usuario" });

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const dataGoogle = async (req, res) => {
  const { data } = req.query;

  try {
    const result = await googleData(data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { readallUser, dataGoogle };
