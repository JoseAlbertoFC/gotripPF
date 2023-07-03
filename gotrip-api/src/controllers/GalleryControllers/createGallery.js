const { Gallery } = require("../../db");

const createGallery = async (info) => {
  const { urlIMG, hotelId, roomId } = info;

  try {
    console.log("creando imagenes -- " + JSON.stringify(info));
    const letsCreateGallery = await Gallery.create({
      urlIMG,
      hotelId,
      roomId,
    });

    return letsCreateGallery;
  } catch (error) {
    throw Error(error.message);
  }
};
module.exports = { createGallery };
