// En esta carpeta van los handlers de User
// Porfa crea un archivo para cada handler
const {
  deleteUserDB,
} = require("../../controllers/UserControllers/deleteUsers");

// Porfa crea un archivo para cada handler
const deleteUserhandler = async (req, res) => {
  const userId = req.params.id;

  console.log(userId);

  try {
    const result = await deleteUserDB(userId);

    if (result !== 1) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json({ deleteUserDB: "Se Elimino con exito el usuario" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { deleteUserhandler };
