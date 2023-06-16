const { User } = require("../../db");

const deleteUserDB = async (userId) => {
  try {
    const deletedUser = await User.destroy({ where: { id: userId } });

    return deletedUser;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { deleteUserDB };
