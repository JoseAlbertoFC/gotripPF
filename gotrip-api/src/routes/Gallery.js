const { Router } = require("express");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const tokenHeader = require("../handlers/UserHandlers/auth");
const {
  getGalleries,
  getGalleriesById,
} = require("../handlers/GalleryHandlers/getGalleries");
const {
  deleteGalleries,
} = require("../handlers/GalleryHandlers/deleteGalleries");
const { postGallery } = require("../handlers/GalleryHandlers/postGallery");
const {postImages,getImages} = require("../handlers/GalleryHandlers/uploadImg.js")

const galleryRoutes = Router();

galleryRoutes
  .get("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), getGalleries)
  .get("/:id", tokenHeader, roleUserHandler(["user", "admin", "host"]), getGalleriesById)
  .delete("/:id", tokenHeader, roleUserHandler(["host"]), deleteGalleries)
  .post("/", postGallery)
  .post("/upload", postImages)

module.exports = galleryRoutes;
