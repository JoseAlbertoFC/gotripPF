const jwt = require('jsonwebtoken');


const tokenSing = async (user) => {
  return jwt.sign({
    _id:user.id,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn:"2h"
  }
  )
}


module.exports = tokenSing