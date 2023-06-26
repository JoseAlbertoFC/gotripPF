const { Rooms } = require("../../db");

const roomDelete = async (id) => {
  try {
    // console.log("****borrar");
    console.log(id);
    return await Rooms.destroy({where: {id: id}});
  } catch (error) {
    throw new Error({ error: error.message });
  }
};

module.exports = {
    roomDelete
};