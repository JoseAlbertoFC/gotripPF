const checkAuth = require("../../controllers/UserControllers/auth");

const tokenHeader = async (req, res,next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const result = await checkAuth(token);
    if(result === null) return res.status(404).json({token:"your token is not valid"});
    
    if (result._id) {
      next();
    } else {
      res.status(404).json({ error: "Invalid token" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});

  }
};

module.exports = tokenHeader;
