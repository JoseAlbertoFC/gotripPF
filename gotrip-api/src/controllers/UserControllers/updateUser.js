const { User } = require("../../db");
const updateUser = async ( 
  {name,
  email,
  password,
  gender,
  birthday,
  address,
  dniPasaport,
  rol,
  id}
  ) => {
  console.log(  name,
    email,
    password,
    gender,
    birthday,
    address,
    dniPasaport,
    rol,)
  


  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.gender = gender;
      user.birthday  = birthday;
      user.address = address;
      user.dniPasaport = dniPasaport;
      user.rol =rol;
    
      
      await user.save();
      return (user);
    } else {
      return ({ error: 'Usuario no encontrado.' });
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw new Error({ error: error.message });
  }
};

module.exports = { updateUser };