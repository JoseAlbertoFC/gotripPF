const { Router } = require("express");
// Aqui van todas la librerias que usaremso
const googleAuth = require("../dal/google-auth.dal");
const { userNew } = require("../handlers/UserHandlers/createUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser, dataGoogle } = require("../handlers/UserHandlers/readAllUser");
const { readallUserID } = require("../handlers/UserHandlers/readUserID");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");
const { restoreUserHandler } = require("../handlers/UserHandlers/restoreUser");
const { Loginuser } = require("../handlers/UserHandlers/loginUsers");
const {
  readDeletedHandler,
} = require("../handlers/UserHandlers/getDeletedUsers");
const tokenHeader = require("../handlers/UserHandlers/auth");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");
const config = require("../controllers/GoogleAuth/google");
const { googleHandler } = require("../handlers/Google/googleHandler");
const WhatsappHandler = require("../handlers/WhatsappHandlers/WhatsappHandler");

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
 *     summary: Crea un nuevo usuario la ruta no cuenta con proteccion de ruta
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

// La no proteger esta ruta con el meto JWT

userRoute.post("/createNewUser", userNew);

/**
 * @swagger
 * /user/deleteUser/{userId}:
 *   delete:
 *     summary: Elimina un usuario por su ID -la ruta cuenta con proteccion de ruta solo acepta peticiones de admin y de host
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

userRoute.delete(
  "/deleteUser/:id",
  tokenHeader,
  roleUserHandler(["admin", "host"]),
  deleteUserhandler
);

/**
 * @swagger
 * /user/readUser:
 *   get:
 *     summary: Obtiene todos los usuarios -la ruta cuenta con proteccion de ruta solo acepta peticiones de admin y de host
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

userRoute.get(
  "/readUser",
  tokenHeader,
  roleUserHandler(["admin", "host"]),
  readallUser
);
/**
 * @swagger
 * /user/readUser/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a buscar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente
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
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */

userRoute.get(
  "/readUser/:id",
  tokenHeader,
  roleUserHandler(["admin", "host"]),
  readallUserID
);
/**
 * @swagger
 * /user/updateUser/{userId}:
 *   put:
 *     summary: Actualiza un usuario por su ID Esta ruta acepta peticiones de usuarios admin y host
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

userRoute.put(
  "/updateUser/:id",
  tokenHeader,
  roleUserHandler(["user", "admin", "host"]),
  updatedataUser
);
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

// El login no cuenta con proteccion de ruta cualquier usuario tiene acceso a las rutas
userRoute.post("/login", Loginuser);
userRoute.put(
  "/restoreUser/:userId",
  tokenHeader,
  roleUserHandler(["host"]),
  restoreUserHandler
);
userRoute.get(
  "/readDeletedUsers",
  tokenHeader,
  roleUserHandler(["host"]),
  readDeletedHandler
);

// Configuración de Express
userRoute.use(
  session({ secret: "secretStuff", resave: false, saveUninitialized: true })
);
userRoute.use(passport.initialize());
userRoute.use(passport.session());

// Configuración de Passport
let userProfile;
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      // Aquí puedes realizar acciones con el perfil del usuario obtenido de Google
      // console.log(profile);
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Rutas
userRoute.get("/", (req, res) => {
  res.redirect("/user/auth/google");
});

userRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

userRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // El usuario ha sido autenticado correctamente

    res.redirect("/user/dataGoogle");
  }
);

userRoute.post(
  "https://gotrippf-production.up.railway.app/user/dataGoogle",
  async (req, res) => {
    const { failure, success } = await googleAuth.registerWithGoogle(
      userProfile
    );
    const token = jwt.sign(userProfile, "secretKey");

    if (failure) {
      console.log("El usuario de Google no existe en la base de datos");
      res
        .status(200)
        .json({
          user: userProfile,
          message: "El usuario de Google no existe en la base de datos",
        });
    } else {
      console.log("Se ha registrado un nuevo usuario de Google");
      res
        .status(200)
        .json({
          user: userProfile,
          message: "Se ha registrado un nuevo usuario de Google",
        });
    }

    res.redirect(
      `https://gotrippf-production.up.railway.app/user/dataGoogle?token=${token}`
    );
  }
);

userRoute.get("/error", (req, res) =>
  res.send("Error logging in via Google..")
);

userRoute.get("/signout", (req, res) => {
  try {
    req.session.destroy(function (err) {
      console.log("session destroyed.");
    });
    res.status(200).json({ message: "Signed out successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to sign out user" });
  }
});

userRoute.get("/profile", googleHandler);

userRoute.get("/dataGoogle", dataGoogle);

// Ruta de logout
userRoute.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error al destruir la sesión:", err);
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Sesión cerrada exitosamente" });
    res.redirect("/login");
  });
});

// Whatsapp implementaicon

// Ruta para recibir mensajes de WhatsApp
userRoute.post("/webhooks/messages", WhatsappHandler);

module.exports = userRoute;
