const { login } = require("../../controllers/UserControllers/loginUsers");

// Porfa crea un archivo para cada handler
const Loginuser = async (req,res) => {
  const { username, passwordlogin } = req.body;
  
  

  try {

    const result = await login(username,passwordlogin);

    if(result.error){
      res.status(404).json(result);

    }else{
      res.status(200).json(result);

    }

  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={Loginuser}