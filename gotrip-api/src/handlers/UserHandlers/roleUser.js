const roleUser = require("../../controllers/UserControllers/roleUser");

const roleUserHandler =(roles)=> async (req, res,next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const result = await roleUser(token);
    if(result === null) return res.status(404).json({token:"rol de user not valid"});
    if([].concat(roles).includes(result.rol)){
      next();
    }else{
      res.status(404).json({user:"user is no authorized" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});

  }
};

module.exports = roleUserHandler;
