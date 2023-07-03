const bcrypt = require("bcrypt");
const { User } = require("../../db");
const { tokenSing } = require("./generateToken");
const { HederCookie } = require("./generateToken");

const login = async (username, passwordlogin) => {
  try {
    // Verificar si el usuario existe en la base de datos
    const user = await User.findOne({ where: { email: username } });

    if (!user) {
      return { error: "Usuario no encontrado" };
    }

    // Verificar la contraseña ingresada
    if (!passwordlogin || !user.password) {
      return { error: "Contraseña no válida" };
    }

    const isPasswordMatch = bcrypt.compareSync(passwordlogin, user.password);

    const tokenSession = await tokenSing(user);

    const cookie = await HederCookie();

    if (!isPasswordMatch) {
      return { error: "Contraseña incorrecta" };
    }

    const data = {
      data: user,
      tokenSession,
      cookie,
    };

    // Proceso de inicio de sesión exitoso
    return data;
  } catch (error) {
    console.error(error);
    return { error: "Error en el servidor" };
  }
};

module.exports = { login };
