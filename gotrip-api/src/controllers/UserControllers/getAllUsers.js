// En esta carpeta van los controllers de Users
// Porfa crea un archivo para cada controller
const {User} = require("../../db")
//TODO Este controlador aun no esta listo
const newUser = async  (name,email,password,gender,birthday,address,dniPasaport,rol) => {
  console.log(User)
  console.log(name,email,password,gender,birthday,address,dniPasaport,rol)
  try {
    const newUser = new User({
      name:name,
      email:email,
      password:password,
      gender:gender,
      birthday:birthday,
      address:address,
      dniPasaport:dniPasaport,
      rol:rol,
    });



    const savedUser = await newUser.save();
    

   
   
    return savedUser;

    
  } catch (error) {
    console.log(error.message);
    throw new Error({error:error.message});
    
  }

}

module.exports = {newUser}