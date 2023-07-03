const { Hotel } = require("../../db");
const { Op } = require("sequelize");

const readDeletedHotel = async () => {
  try {
    const hotelsDeleted = await Hotel.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
    });

    return hotelsDeleted;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  readDeletedHotel,
};
