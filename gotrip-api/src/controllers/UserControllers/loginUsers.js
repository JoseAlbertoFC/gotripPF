const bcrypt = require('bcrypt');
const { User } = require("../../db");

const login = async (username, passwordlogin ) => {

 
  

  try {
    // Verificar si el usuario existe en la base de datos
    const user = await User.findOne({ where:{email:username} });

    
    if (!user) {
      return ({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña ingresada
    if (!passwordlogin || !user.password) {
      return ({ error: 'Contraseña no válida' });
    }

    const isPasswordMatch = bcrypt.compareSync(passwordlogin, user.password);

    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
      return ({ error: 'Contraseña incorrecta' });
    }

    // Proceso de inicio de sesión exitoso
    return ({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error(error);
    return ({ error: 'Error en el servidor' });
  }
  
};

module.exports = { login };
