const { deletePayDB } = require("../../controllers/PayControllers/deletePay");

// Porfa crea un archivo para cada handler
const deletePayhandler = async (req, res) => {
  const userId = req.params.id;

  console.log(userId);

  try {
    const result = await deletePayDB(userId);

    if (result !== 1) {
      return res.status(404).json({ message: "Pago no encontrado" });
    }
    res.status(200).json({ deletePayDB: "Se Elimino con exito el pago" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { deletePayhandler };
