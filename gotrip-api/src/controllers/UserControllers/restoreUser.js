const { User } = require("../../db")

const restoreUserById = async (userId) => {
    try {
        const userToRestore = await User.findByPk(
          userId,
          { paranoid: false },
          
        );
        return await userToRestore.restore();
      } catch (error) {
        throw new Error({ error: error.message });
      }
}

module.exports = {
    restoreUserById,
}

