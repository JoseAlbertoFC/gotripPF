const { Rooms} = require("../../db")
const {Op} = require("sequelize")


const postNewRoomDB = async (room, price,numRooms,availableRooms, description,status, hotelId) => {
    const dataState = {
      state: false,
      text: "",
      detail: ""
    };
  //  console.log("validateRoom*********************")
    try {
      const validateRoom = await Rooms.findOne({
        where: {
          [Op.and]: [
            { room: room },
            { hotelId: hotelId }
          ]
        }
      });
     console.log("validateRoom*********************" +validateRoom);
      if (validateRoom) {
        console.log("****Room or Hotel already exist**************************");
        dataState.text = "Room or Hotel already exists";
        dataState.detail = error.message;
        throw new Error(JSON.stringify(dataState));
      }
  
      const createdRoom = await Rooms.create({
        room: room,
        price: price,
        status: status,
        availableRooms: availableRooms,
        numRooms: numRooms,
        description: description,
        hotelId: hotelId
        
      });
  
      dataState.state = true;
      dataState.text = "Room created successfully";
      dataState.detail = createdRoom.dataValues;
      return dataState;
    } catch (error) {
      dataState.text = "Error creating room";
      dataState.detail = error.message;
      console.log("dataState*error******" + JSON.stringify(dataState));
      throw new Error(JSON.stringify(dataState));
    }
  };

module.exports = {
    postNewRoomDB 
};