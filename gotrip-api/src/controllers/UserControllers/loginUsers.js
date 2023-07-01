const bcrypt = require('bcrypt');
const { User } = require('../../db');
const { tokenSing } = require('./generateToken');
const { OAuth2Client } = require('google-auth-library');
const { GOOGLE_CLIENT_ID } = process.env;
//requerir variables de entorno

// instancio client de la libreria de auth de google y le paso mi ID del .env
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const login = async (email, passwordlogin, tokenGoogle) => {
  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return { error: 'Usuario no encontrado' };
    }

    const tokenSession = await tokenSing(user);
    // le pregunto si hay token de google, porque de ser asi, ni me gasto en buscar ni verificar ni nada.
    if (tokenGoogle) {
      const ticket = await client.verifyIdToken({
        idToken: tokenGoogle,
        audience: GOOGLE_CLIENT_ID, // Reemplaza con tu ID de cliente de Google
      });
      const payload = ticket.getPayload();

      return { data: user, tokenSession };
    }

    // Verificar si el usuario existe en la base de datos

    // Verificar la contraseña ingresada
    if (!passwordlogin || !user.password) {
      return { error: 'Contraseña no válida' };
    }

    const isPasswordMatch = bcrypt.compareSync(passwordlogin, user.password);

    if (!isPasswordMatch) {
      return { error: 'Contraseña incorrecta' };
    }

    const data = {
      data: user,
      tokenSession,
    };

    // Proceso de inicio de sesión exitoso
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { login };