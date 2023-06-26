const { verifyToken } = require("./generateToken")

const checkAuth = async  (req,res,next) => {

  try {
    const tokenData = await verifyToken(token)
    console.log(tokenData)
    if(tokenData._id){
      next()
    }else{
      res.status(404)
      res.send({error:"token not valid"})

    }
    
  } catch (e) {
    res.status(400).send({ error: e.message })
    
  }
}

module.exports = checkAuth