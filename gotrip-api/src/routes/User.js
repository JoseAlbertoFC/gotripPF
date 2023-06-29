const { Router } = require ("express");
// Aqui van todas la librerias que usaremso 

const { userNew } = require("../handlers/UserHandlers/createUsers");
const { deleteUserhandler } = require("../handlers/UserHandlers/deleteUser");
const { readallUser } = require("../handlers/UserHandlers/readAllUser");
const { readallUserID } = require("../handlers/UserHandlers/readUserID");
const { updatedataUser } = require("../handlers/UserHandlers/updateUser");
const { Loginuser } = require("../handlers/UserHandlers/loginUsers");
const tokenHeader = require("../handlers/UserHandlers/auth");
const roleUserHandler = require("../handlers/UserHandlers/roleUser");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const session = require('express-session');
const config = require('../controllers/GoogleAuth/google');
const twilio = require('twilio');




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


userRoute.post("/createNewUser", userNew)

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


userRoute.delete("/deleteUser/:id",tokenHeader,roleUserHandler(['admin','host']), deleteUserhandler)

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


userRoute.get("/readUser", tokenHeader, roleUserHandler(['admin', 'host']), readallUser)
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



userRoute.get("/readUser/:id", tokenHeader, roleUserHandler(['admin', 'host']), readallUserID)
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


userRoute.put("/updateUser/:id",tokenHeader,roleUserHandler(['admin','host']), updatedataUser)
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
userRoute.post("/login",Loginuser)

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
  res.send('<a href="user/auth/google">Authenticate with Google</a>');
});

userRoute.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

userRoute.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // El usuario ha sido autenticado correctamente
    res.redirect('/user/profile');
  }
);

userRoute.get('/profile', (req, res) => {
  // Página de perfil del usuario
  res.send(`Hello ${req.user.displayName}. Welcome to your profile!`);
});

// Implementacion de Login de Facebook


// Configuración de la estrategia de autenticación de Facebook
passport.use(new FacebookStrategy({
  clientID: process.env.TU_CLIENT_ID,
  clientSecret: process.env.TU_CLIENT_SECRET,
  callbackURL: process.env.TU_CALLBACK_FACEBOOK
},
(accessToken, refreshToken, profile, done) => {
  // Aquí puedes hacer lo que desees con la información del perfil del usuario
  // Por ejemplo, puedes almacenar los datos en una base de datos o crear una sesión de usuario.
  console.log(profile);
  done(null, profile);
}));

// Configuración de serialización y deserialización de usuarios
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});



// Configuración de Express
userRoute.use(require('express-session')({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true
}));
userRoute.use(passport.initialize());
userRoute.use(passport.session());

// Ruta de inicio de sesión de Facebook
userRoute.get('/auth/facebook', passport.authenticate('facebook'));

// Ruta de retorno de Facebook después del inicio de sesión
userRoute.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/user/perfil',
  failureRedirect: '/login'
}));

// Ruta de perfil de usuario
userRoute.get('/perfil', (req, res) => {
  res.render('perfil', { user: req.user });
});

// Ruta de inicio
userRoute.get('/facebook', (req, res) => {
  res.render('index');
});

// Ruta de logout
userRoute.get('/logout', (req, res) => {
    // Cerrar sesión del usuario
    req.logout(err => {
        if (err) {
            // Manejar cualquier error que ocurra durante el logout
            console.error(err);
        }
        // Redirigir a la página de inicio de sesión o a cualquier otra página
        res.redirect('/login');
    });
});

// Whatsapp implementaicon

// Configuración de Twilio
const accountSid = process.env.WHATSAPP_CLIENT;
const authToken = process.env.WHATSAPP_SECRET;
const client = twilio(accountSid, authToken);

// Ruta para recibir mensajes de WhatsApp
userRoute.post('/webhooks/messages', twilio.webhook({ validate: false }), (req, res) => {
    const message = req.body.Body;
    const sender = req.body.From;
    // Ejemplo de respuesta automática
    const automaticResponses = [
        {
            keyword: 'hola',
            response: '¡Hola! Bienvenido a Gotrip, tu plataforma de reservas de hoteles.'
        },
        {
            keyword: 'habitaciones',
            response: 'Gotrip ofrece una amplia variedad de habitaciones en nuestros hoteles asociados.'
        },
        {
            keyword: 'disponibilidad',
            response: 'Para verificar la disponibilidad de habitaciones, proporciona la fecha de check-in, check-out y número de huéspedes En el Formulario.'
        },
        {
            keyword: 'tarifas',
            response: 'Las tarifas de nuestros hoteles varían según la temporada y la disponibilidad.'
        },
        {
            keyword: 'reservar',
            response: 'Puedes reservar una habitación proporcionando tu nombre completo, número de teléfono y correo electrónico.'
        },
        {
            keyword: 'cancelar',
            response: 'Si deseas cancelar tu reserva, comunícate con nuestro equipo de atención al cliente al número 123456789.'
        },
        {
            keyword: 'ayuda',
            response: 'Estoy aquí para ayudarte en lo que necesites.'
        },
        {
            keyword: 'adios',
            response: '¡Gracias por contactarnos! Si tienes más preguntas, no dudes en volver. ¡Que tengas un buen día!'
        },
        {
            keyword: 'default',
            response: 'Disculpa, no he entendido tu pregunta. Por favor, sé más específico.'
        }
    ];

    // Envía la respuesta
    if (message === 'hola') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[0].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message === 'habitaciones') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[1].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });

    } else if (message === 'disponibilidad') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[2].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message === 'tarifas') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[3].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message === 'reservar') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[4].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    }
    else if (message === 'cancelar') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[5].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message === 'ayuda') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[6].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message === 'adios') {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[7].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    } else if (message) {
        const mensagge = client.messages.create({
            from: 'whatsapp:+14155238886',
            to: sender,
            body: automaticResponses[8].response
        }).then((mensagge) => {
            console.log('Respuesta enviada con éxito.');
        }).catch((err) => {
            console.error('Error al enviar la respuesta:', err);
        });
    }
    try {
        res.status(200).json({ Whatsapp: "Enviado con exito" });

    } catch {
        res.status(400).json({ Whatsapp: "Mensaje no Enviado Error"})
    }
   
  
});



module.exports = userRoute