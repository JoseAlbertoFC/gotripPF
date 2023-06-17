const { Service } = require("../../db");

const destroyService = async (id) => {
  try {
    return await Service.destroy({where: {id: id}});
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
  destroyService,
};