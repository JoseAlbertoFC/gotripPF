const { Service, Rooms } = require("../../db");

const createService = async (name) => {
  try {
    const newService = await Service.create({ name });

    const serviceWithDetails = await Service.findOne({
      where: { id: newService.id },
      include: [
        {
          model: Rooms,
        },
      ],
    });

    return serviceWithDetails;
  } catch (error) {
    console.log({ error: error.message });
    throw new Error({ error: error.message });
  }
};

module.exports = {
  createService,
};
