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
  .post("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), postGallery)
  .post("/upload", roleUserHandler(["user", "admin", "host"]), postImages)
  .get("/imagesget", roleUserHandler(["user", "admin", "host"]), getImages)

module.exports = galleryRoutes;
