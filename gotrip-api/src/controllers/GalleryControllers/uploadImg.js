const { cloudinary } = require("./cloudinary.js");
const { Hotel } = require("../../db");
const { createGallery } = require("./createGallery.js");

const postUploadImg = async (fileStr, idHotel, idRoom) => {
  try {
    const objHotel = await Hotel.findByPk(idHotel);
    if (!objHotel) {
      return { success: false, message: "Hotel no Found" };
    } else {
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "vusxmtp5",
      });

      if (uploadResponse.public_id && uploadResponse.secure_url) {
        let info = {
          urlIMG: uploadResponse.secure_url,
          hotelId: idHotel,
          roomId: idRoom,
        };

        const saveUrlDB = createGallery(info);

        return { success: true, data: uploadResponse.secure_url };
      } else {
        return { success: false, message: "Error al cargar la imagen" };
      }
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `Error al cargar la imagen ${JSON.stringify(error)}`,
    };
  }
};

module.exports = {
  postUploadImg,
};
