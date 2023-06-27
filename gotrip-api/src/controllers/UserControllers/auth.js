// Llamamos la funcion para verificar los token 
const { verifyToken } = require("./generateToken");

// Funcion para valdiar que un token es valido.
const checkAuth = async (token) => {
    try {
      // Se verifica que el token sea valido.
    const tokenData = await verifyToken(token);
    // Retornamos el token 
    return tokenData
  } catch (e) {
    return ({ error: e.message });
  }
};

module.exports = checkAuth;