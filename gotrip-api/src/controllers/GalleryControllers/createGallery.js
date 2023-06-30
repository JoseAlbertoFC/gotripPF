const { Sequelize } = require("sequelize");
const { Gallery, Hotel } = require("../../db");

const createGallery = async (info) => {
  const { urlIMG, hotelId,roomId } = info;

  try {
    console.log("creando imagenes -- " + JSON.stringify(info) );
    const letsCreateGallery = await Gallery.create({
      urlIMG,hotelId,roomId
    });

    // const fireProofe = await Gallery.findOne({
    //   include: { model: Hotel, as: "hotel", where: { id: idHotel } },
    // });
    // if (fireProofe == null) {
    //   await letsCreateGallery.setHotel(idHotel);
    //   // console.log(letsCreateGallery);
    //   return letsCreateGallery;
    // } else return "Ya existe una galería en la bd con estas credenciales";
  } catch (error) {
    throw Error(error.message);
  }
};
module.exports = { createGallery };
