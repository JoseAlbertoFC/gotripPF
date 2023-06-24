const { Rooms} = require("../../db")
const { Op } = require("sequelize");

const putUpdateRooms = async (idRoom,updatedData) => {
    const dataState = {
      state: false,
      text: "",
      detail: ""
    };
    console.log("validateRoom*********************")
    try {
        if (!idRoom) {
            dataState.text = "The Room ID is required";
            return dataState;
          }
          
    //   const validateRoom = await Rooms.findByPk(idRoom);
      const validateRoom = await Rooms.findByPk(idRoom);      
      if (!validateRoom){
        dataState.text = "Room not found";
        return dataState;
      }else{
        const updatedHotel = await Rooms.update(updatedData);
        dataState.state= true,
        dataState.text = "SUCCESSFULLY UPDATED ROOM";
        dataState.detail=  updatedHotel.toJSON();
        return dataState;
  
      }
    } catch (error) {
      dataState.text = "Error creating room";
      dataState.detail = error.message;
      throw new Error(JSON.stringify(dataState));
    }
  };

module.exports = {
    putUpdateRooms 
};