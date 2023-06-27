const { Router } = require ("express");
// Aqui va el midleware de User

const { userNew } = require("../handlers/UserHandlers/createUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser } = require("../handlers/UserHandlers/readAllUser");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");
const { Loginuser } = require("../handlers/UserHandlers/loginUsers");
const tokenHeader = require("../handlers/UserHandlers/auth");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;



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


// La no proteger esta ruta con el meto JWT


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


userRoute.delete("/deleteUser/:id",tokenHeader,roleUserHandler(['admin','Host']), deleteUserhandler)

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


userRoute.get("/readUser",tokenHeader,roleUserHandler(['user','admin','Host']), readallUser)
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


userRoute.put("/updateUser/:id",tokenHeader,roleUserHandler(['user']), updatedataUser)
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


const GoogleStrategy = require('passport-google-oauth2').Strategy;
const session = require('express-session');
const config = require('../controllers/GoogleAuth/google');




// Configuración de Express
userRoute.use(session({ secret: 'secretStuff', resave: false, saveUninitialized: true }));
userRoute.use(passport.initialize());
userRoute.use(passport.session());

// Configuración de Passport
passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      // Aquí puedes realizar acciones con el perfil del usuario obtenido de Google
      console.log(profile);
      return done(null, profile);
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
userRoute.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

userRoute.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

userRoute.get(
  'user/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // El usuario ha sido autenticado correctamente
    res.redirect('/profile');
  }
);

userRoute.get('/profile', (req, res) => {
  // Página de perfil del usuario
  res.send(`Hello ${req.user.displayName}. Welcome to your profile!`);
});

// Implementacion de Login de Facebook

passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_SECRET_KEY,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        },
        async function (accessToken, refreshToken, profile, cb) {
            const user = await User.findOne({
                accountId: profile.id,
                provider: 'facebook',
            });
            if (!user) {
                console.log('Adding new facebook user to DB..');
                const user = new User({
                    accountId: profile.id,
                    name: profile.displayName,
                    provider: profile.provider,
                });
                await user.save();
                // console.log(user);
                return cb(null, profile);
            } else {
                console.log('Facebook User already exist in DB..');
                // console.log(profile);
                return cb(null, profile);
            }
        }
    )
);

userRoute.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

userRoute.get(
    '/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/auth/facebook/error',
    }),
    function (req, res) {
        // Successful authentication, redirect to success screen.
        res.redirect('/auth/facebook/success');
    }
);

userRoute.get('/success', async (req, res) => {
    const userInfo = {
        id: req.session.passport.user.id,
        displayName: req.session.passport.user.displayName,
        provider: req.session.passport.user.provider,
    };
    res.render('fb-github-success', { user: userInfo });
});

userRoute.get('/error', (req, res) => res.send('Error logging in via Facebook..'));

userRoute.get('/signout', (req, res) => {
    try {
        req.session.destroy(function (err) {
            console.log('session destroyed.');
        });
        res.render('auth');
    } catch (err) {
        res.status(400).send({ message: 'Failed to sign out fb user' });
    }
});


module.exports = userRoute