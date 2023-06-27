// Datos de la tabla User 
const { User } = require("../../db");

// Recibimos por parametro todo las variables de user para pder actualziar la data.
const updateUser = async ( 
  {name,
  email,
  password,
  gender,
  birthday,
  address,
  dniPasaport,
  rol,
  id,
  phoneCode,
  phone,
  confirmPassword,
  country,}

  ) => {
  
 
    try {
      // Una vez que hacemso match con el usuario correcto podemos modificar la informacion del usuario.
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
      user.phoneCode = phoneCode;
      user.confirmPassword = confirmPassword;
      user.country = country;
      user.phone = phone;
    
      // Guardamos toda la informacion del usuario que se actualizo en la base de datos.
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
