const { Rooms} = require("../../db")


const postNewRoomDB = async (room, price,numRooms,kindRoom, status, hotelId) => {
    const dataState = {
      state: false,
      text: "",
      detail: ""
    };
  console.log("*********************");
    try {
      const validateRoom = await Rooms.findOne({
        where: {
          [Op.or]: [
            { room: room },
            { hotelId: hotelId }
          ]
        }
      });
  
      if (validateRoom) {
        dataState.text = "Room or Hotel already exists";
        throw new Error(JSON.stringify(dataState));
      }
  
      const createdRoom = await Rooms.create({
        room: room,
        price: price,
        status: status,
        kindRoom: kindRoom,
        numRooms: numRooms,
        hotelId: hotelId
        
      });
  
      dataState.state = true;
      dataState.text = "Room created successfully";
      dataState.detail = createdRoom.dataValues;
      return dataState;
    } catch (error) {
      dataState.text = "Error creating room";
      dataState.detail = error.message;
      throw new Error(JSON.stringify(dataState));
    }
  };

module.exports = {
    postNewRoomDB 
};