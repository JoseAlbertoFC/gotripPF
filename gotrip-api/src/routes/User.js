const { Router } = require ("express");
// Aqui va el midleware de User

const { userNew } = require("../handlers/UserHandlers/createUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser } = require("../handlers/UserHandlers/readAllUser");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");
const { Loginuser } = require("../handlers/UserHandlers/loginUsers");

// Aqui va el midleware de User
const userRoute = Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operaciones relacionadas con usuarios
 *
 * /user/createNewUser:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               address:
 *                 type: string
 *               dniPasaport:
 *                 type: string
 *               rol:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               phone:
 *                 type: string
 *               thirdPartyCreated:
 *                 type: boolean
 *               birthday:
 *                 type: string
 *               country:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *               phoneCode:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 address:
 *                   type: string
 *                 dniPasaport:
 *                   type: string
 *                 rol:
 *                   type: string
 *                 postalCode:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 thirdPartyCreated:
 *                   type: boolean
 *                 birthday:
 *                   type: string
 *                 country:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */

userRoute.post("/createNewUser", userNew)

/**
 * @swagger
 * /user/deleteUser/{userId}:
 *   delete:
 *     summary: Elimina un usuario por su ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al eliminar el usuario
 */


userRoute.delete("/deleteUser/:id", deleteUserhandler)

/**
 * @swagger
 * /user/readUser:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   gender:
 *                     type: string
 *                   address:
 *                     type: string
 *                   dniPasaport:
 *                     type: string
 *                   rol:
 *                     type: string
 *                   postalCode:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   thirdPartyCreated:
 *                     type: boolean
 *                   birthday:
 *                     type: string
 *                   country:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *       500:
 *         description: Error al obtener la lista de usuarios
 */


userRoute.get("/readUser", readallUser)
/**
 * @swagger
 * /user/updateUser/{userId}:
 *   put:
 *     summary: Actualiza un usuario por su ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdateInput'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al actualizar el usuario
 *
 * @swagger
 * components:
 *   schemas:
 *     UserUpdateInput:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         gender:
 *           type: string
 *           description: Género del usuario
 *         birthday:
 *           type: string
 *           description: Fecha de nacimiento del usuario
 *         address:
 *           type: string
 *           description: Dirección del usuario
 *         dniPasaport:
 *           type: string
 *           description: DNI o pasaporte del usuario
 *         rol:
 *           type: string
 *           description: Rol del usuario
 *         phoneCode:
 *           type: string
 *           description: Código telefónico del usuario
 *         confirmPassword:
 *           type: string
 *           description: Confirmación de contraseña del usuario
 *         country:
 *           type: string
 *           description: País del usuario
 *       required:
 *         - name
 *         - email
 *         - password
 */


userRoute.put("/updateUser/:id", updatedataUser)
/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error en el servidor
 *
 * @swagger
 * components:
 *   schemas:
 *     LoginInput:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de usuario o correo electrónico
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *       required:
 *         - username
 *         - password
 */

userRoute.post("/login",Loginuser)

module.exports = userRoute