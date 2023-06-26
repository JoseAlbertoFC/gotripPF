const { Op ,Sequelize} = require("sequelize");
const { Hotel, Destination,Rooms,Booking } = require("../../db");
const {getHotelById} = require("../HotelControllers/indexControlers.js")




const bookingVal = async(idRoom,cantReq,eventRooms) =>{
    const dataState = {
        state: false,
        text: "",
        detail: "",
      };  
    try{
        const searchRooms = await Rooms.findByPk(idRoom);
        if (!searchRooms) {
            dataState.text = "The Room ID is not Found";
            return dataState;
        }    

        const {hotelId,room,numRooms,roomsInUse,status  }= searchRooms


        if (eventRooms === "ADD"){            
            if(status === false) {
                dataState.text = `The ${room} room is not available`;
                return dataState;
            }else {
                 let usedRooms = roomsInUse + cantReq;
                        
                if (usedRooms > numRooms) {// no hay disponibilidad
                    dataState.text = `The ${room} room is not available for the required amount ( ${cantReq} )`;
                    return dataState; 
                }
                if (usedRooms <= numRooms) { //si hay disponibilidad                    
                    let updatedDataRoom;
                    if (usedRooms ===  numRooms){
                        updatedDataRoom ={  roomsInUse: usedRooms,status: false}                     
                    }else{
                        updatedDataRoom ={   roomsInUse: usedRooms,status: true}                     
                    }

                    Object.assign(searchRooms, updatedDataRoom); // Aplica los datos actualizados al objeto de la habitación
                    await searchRooms.save(); // Guarda los cambios en la base de datos
                    
                    const searchHotel = await Hotel.findByPk(hotelId);
                    
                    const totalNumRooms = await sumNumRoomsByHotel(hotelId);
                    // console.log("****totalNumRooms*** " + totalNumRooms);
                    // console.log("****numRooms***" + searchRooms.numRooms);

                    if (totalNumRooms >= searchHotel.numberRooms) {
                        // console.log("ACTUALIZA EL HOTEL********************");
                        const updatedDataHotel = { status: false };
                        // const searchHotel = await Hotel.findByPk(hotelId);
                        Object.assign(searchHotel, updatedDataHotel);
                        await searchHotel.save();
                      }

                // console.log(`Total number of rooms for hotel ${hotelId}: ${totalNumRooms}`);

                dataState.state = true;
                dataState.text = `The ${room} room is available for the required amount (${cantReq})`;
                dataState.detail = searchRooms;
                return dataState;
                }    
            }
        }else{  // restar los cuartos, pasar a true rooms y hotel
            let usedRooms = roomsInUse - cantReq;
            
            const updatedDataRoom ={  roomsInUse: usedRooms,status: true}                     
            Object.assign(searchRooms, updatedDataRoom); // Aplica los datos actualizados al objeto de la habitación
            await searchRooms.save(); // Guarda los cambios en la base de datos
            
            const updatedDataHotel = { status: true };
            const searchHotel = await Hotel.findByPk(hotelId);
            Object.assign(searchHotel, updatedDataHotel);
            await searchHotel.save();

            dataState.state = true;
            dataState.text = `The ${room} room is available for the required amount (${cantReq})`;
            dataState.detail = searchRooms;
            return dataState;
        }
  
        

    }catch(error){
        throw Error(error.message);
    }

}



const sumNumRoomsByHotel = async (hotelId) => {
    try {
        // console.log("**dentro de la funcion******" + hotelId);
      const result = await Rooms.findOne({
        attributes: [
          [Sequelize.literal('SUM("roomsInUse")'), 'totalNumRooms'],
        ],
        where: {
            hotelId: hotelId,
        },
        raw: true,
      });
  
      return result.totalNumRooms || 0;
    } catch (error) {
      throw new Error(error.message);
    }
  };


module.exports = {
    bookingVal 

}