const api = require("../../../api/apiHotels.json");

const { Gallery, Hotel } = require("../../db");

const getAllGalleries = async () => {
  try {
    //JSON
    const galleryHotel = api.map((hotel) => {
      return {
        urlIMG: [
          hotel.photo1,
          hotel.photo2,
          hotel.photo3,
          hotel.photo4,
          hotel.photo5,
        ],
      };
    });

    //BD
    const bdGallery = await Gallery.findAll({
      include: [{ model: Hotel, as:'hotel', attributes:['id', 'name']}]
    });
    if(bdGallery.length>0 || galleryHotel.length>0)
    return [...bdGallery, ...galleryHotel]
  } catch (error) {
    throw Error (error.message);
  }
};
 module.exports ={getAllGalleries};
// En esta carpeta van los controllers de Gallery
// Porfa crea un archivo para cada controller

// Ejemplo

// const axios = require("axios");
// const { Activity, Country } = require("../db");

// const countryDetail = async (id) => {
//     try {
//       return await Country.findByPk(id, {
//         include: [Activity],
//       });
//     } catch (error) {
//       throw new Error("Ups! We got a problem.");
//     }
//   };

// module.exports = {
//     countryDetail,
//   };

//Borra este comentario guia al empezar a codear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
