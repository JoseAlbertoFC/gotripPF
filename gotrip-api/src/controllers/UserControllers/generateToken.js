const jwt = require('jsonwebtoken');


const tokenSing = async (user) => {
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


const verifyToken = async (token) => {
  try {
    return jwt.verify(token,process.env.JWT_SECRET)
  } catch (e) {
    return null
    
  }
}

module.exports = {tokenSing, verifyToken}