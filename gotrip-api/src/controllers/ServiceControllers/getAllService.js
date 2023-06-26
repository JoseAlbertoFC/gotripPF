const { Service, Rooms } = require("../../db");

const getAllServices = async () => {
  try {
    return await Service.findAll({
      include: [{ model: Rooms }],
    });
  } catch (error) {
    // console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  getAllServices,
};