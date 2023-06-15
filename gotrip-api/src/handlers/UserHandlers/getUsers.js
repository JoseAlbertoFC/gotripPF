// En esta carpeta van los handlers de User
// Porfa crea un archivo para cada handler
const { newUser } = require("../../controllers/UserControllers/getAllUsers")

// Porfa crea un archivo para cada handler
const userNew = async (req,res) => {
  const {name, email, password,gender,birthday,address,dniPasaport,rol} = req.body
  

  try {

    const result = await newUser(name, email, password,gender,birthday,address,dniPasaport,rol)
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={userNew}