const{CLOUDINARY_NAME ,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,UPLOAD_PRESET}= process.env
require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = { cloudinary };