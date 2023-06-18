
const { Hotel} = require("../../db")



const postHotelDB = async(name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId) => {
    const  dataState = {
        state: false,
        text:"",
        detail:""
        };

    try{
       
        const [hotel, created] = await Hotel.findOrCreate({
        where: { name, destinationId },
        defaults: { name, image, email, address, phone, checkIn, checkOut, numberRooms, overview, longitude, latitude, destinationId },
      });
    //   console.log("*****************created******");
    //     console.log(created);
      if (created) {
            dataState.state = created;
            dataState.text = "El hotel se creó correctamente";
            dataState.detail = hotel.dataValues;
                 
            // console.log("**********OK CREADO **********************************");
            //  console.log(hotel.dataValues);
            // console.log("El hotel se creó correctamente");
            
      } else {
        dataState.state = created;
        dataState.text = "EL NOMBRE DEL HOTEL YA EXISTE PARA ESA ZONA ";
        dataState.detail = hotel.dataValues;

        // console.log("**********ERROR YA EXISTE**********************************");
        // console.log(hotel.dataValues);
             
      }
      return dataState ;
    } catch (error) {
    //     console.log("**********ERROR ERROR ERROR ERROR **********************************");
    //   console.error("Error al crear el hotel:", error);

        dataState.state = false;
        dataState.text = error.message;
        dataState.detail =error.parent.detail;
      return dataState ;
    }
};


module.exports = {
    postHotelDB
};