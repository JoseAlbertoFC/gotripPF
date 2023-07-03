// Vamos a usar la libreria JWT  para el token 
const jwt = require('jsonwebtoken');


// Recibiremso un usuario de la base de datos.
const tokenSing = async (user) => {
    // Creamos el token con la siguiente informacion  el id del usuario el rol que tiene y con una duracion de 2 horas para el token.
  return jwt.sign({
    _id:user.id,
    role: user.rol
  },
  process.env.JWT_SECRET,
  {
    expiresIn:"2h"
  }
  )
}

// En esta fucnion vamos a verificar que el token sea valido.
const verifyToken = async (token) => {
    try {
     // recivimos el token y lo verificamos con con la llave secreta para verificar que sea un token creado pro nosotros y encryptado  por temas de seguridad.
    return jwt.verify(token,process.env.JWT_SECRET)
  } catch (e) {
    return null
    
  }
}

module.exports = {tokenSing, verifyToken}