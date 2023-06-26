const { Rooms} = require("../../db")
const { Op } = require("sequelize");

const putUpdateRooms = async (idRoom,updatedData) => {
    const dataState = {
      state: false,
      text: "",
      detail: ""
    };
  
    try {
        if (!idRoom) {
            throw new Error("The Room ID is required");
          }
      
          const room = await Rooms.findByPk(idRoom);
      
          if (!room) {
            throw new Error("Room not found");
          }

    Object.assign(room, updatedData); // Aplica los datos actualizados al objeto de la habitación
    await room.save(); // Guarda los cambios en la base de datos

      // console.log("*****room.dataValues********");  
      // console.log( room);
        dataState.state= true,
        dataState.text = "SUCCESSFULLY UPDATED ROOM";
        dataState.detail= room.toJSON();
        return dataState;
  
      
    } catch (error) {
        dataState.state= false,
        dataState.text = "Error to update room";
        dataState.detail = error.message;
        return dataState;
    }
  };

module.exports = {
    putUpdateRooms 
};