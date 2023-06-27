// vamso a traer los datos de la tabla user 
const { User } = require("../../db");

const readUser = async () => {
  

    try {
      // traemos la informacion de todos los usuarios creados en nuestra base de datos.
    const users = await User.findAll();
    
    // Retornamso todos los usuarios.
    return users
  
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { readUser };
