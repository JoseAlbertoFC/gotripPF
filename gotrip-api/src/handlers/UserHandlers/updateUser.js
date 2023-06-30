const { updateUser } = require("../../controllers/UserControllers/updateUser");

// Porfa crea un archivo para cada handler
const updatedataUser = async (req,res) => {
  const id  = req.params.id;
const {   
  name,
  email,
  password,
  gender,
  birthday,
  address,
  dniPasaport,
  rol,
  phoneCode,
  country,
  phone,
    confirmPassword,
    photoUser

 } = req.body;


  
  

  try {

    const result = await updateUser({id, name, email,  password,
      gender,
      birthday,
      address,
      dniPasaport,
        rol, id, phoneCode, country, confirmPassword, phone, photoUser
});

    
    if (result.error){
      res.status(404).json(result);

    }else{
    res.status(200).json(result);
    }
   
    
  } catch (error) {
    res.status(400).json({message:error.message})
    
  }
}

module.exports ={updatedataUser}