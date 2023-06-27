// Nos traemos la informacion de  la tabla User.
const { User } = require("../../db");

const deleteUserDB = async (userId) => {
    try {
    // Obtenemos el id del usuario que deseamso eliminar de la base de datos.   
    const deletedUser = await User.destroy({ where: { id: userId } });
    // Retornamso el usario eliminado.
    return deletedUser;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { deleteUserDB };
