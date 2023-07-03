const { login } = require("../../controllers/UserControllers/loginUsers");

const Loginuser = async (req, res) => {
  const { username, passwordlogin } = req.body;

  try {
    const result = await login(username, passwordlogin);

    if (result.error) {
      res.status(404).json(result);
    } else {
      // Se envia la cookie a la parte Del FRONT para control de rutas
      res.setHeader("set-Cookie", result.cookie);

      // Se envia la respuesta con el 200 para el login del Usiario
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { Loginuser };
