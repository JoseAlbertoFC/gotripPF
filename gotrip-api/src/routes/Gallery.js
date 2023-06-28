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

const galleryRoutes = Router();

galleryRoutes
  .get("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), getGalleries)
  .get("/:id", tokenHeader, roleUserHandler(["user", "admin", "host"]), getGalleriesById)
  .delete("/:id", tokenHeader, roleUserHandler(["host"]), deleteGalleries)
  .post("/", tokenHeader, roleUserHandler(["user", "admin", "host"]), postGallery);

module.exports = galleryRoutes;
