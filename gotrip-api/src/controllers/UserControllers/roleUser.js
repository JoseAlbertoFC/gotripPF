//  Datos de tabla usuario y la funcion verificar token.
const { User } = require("../../db");
const { verifyToken } = require("./generateToken");

const roleUser = async (token) => {
    try {
      // Verificamos el token para extraer el rol del usuario.
    const tokenData = await verifyToken(token);
    const user = await User.findByPk(tokenData._id)
    // Retornamos el usuario con el rol que tiene ,, en caso de no obtener una respuesta valdia retornamos null 
    return user ? user : null;
  } catch (e) {
    return ({ error: e.message });
  }
};

module.exports = roleUser;