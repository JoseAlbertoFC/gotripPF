const { User } = require("../../db");
const { Op } = require("sequelize");

const getDeletedUsers = async () => {
  try {
    const usersDeleted = await User.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
    });

    return usersDeleted;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getDeletedUsers,
};
