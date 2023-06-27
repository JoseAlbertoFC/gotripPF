// En esta carpeta van los controllers de Users
const { User } = require("../../db");
const bcrypt = require('bcrypt');

// Funcion para crear un nuevo usuario Recibe data por parametros.
const newUser = async ({
  name,
  email,
  password,
  gender,
  address,
  dniPasaport,
  rol,
  postalCode,
  phone,
  thirdPartyCreated,
  birthday,
  country,
  confirmPassword,
  phoneCode,
}) => {

  // Vamos a  encryptar la contrasena Por motivos de seguridad la contrasena no puede ir en texto plano en la base de datos 

  function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  }
   // Tambien encryptamos la confirmacion de contrasena.
  function hashConfirmPassword(confirmPassword) {
    const saltRounds = 10;
    const hashedConfimPassword = bcrypt.hashSync(confirmPassword, saltRounds);
    return hashedConfimPassword;
  }
  
  
  // En este aaprtado Hacheamos las dos contrasenas que recibimos por parametro en la funcion.
  const hashedPassword = hashPassword(password);
  const hashedConfimPassword = hashConfirmPassword(confirmPassword);
  // En el siguiente apartado Vamos a llenar en la base de datos el nuevo usuario que acabamos de crear.
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      gender: gender,
      address: address,
      dniPasaport: dniPasaport,
      rol: rol,
      postalCode: postalCode,
      phone: phone,
      thirdPartyCreated: thirdPartyCreated,
      phoneCode: phoneCode,
      confirmPassword: hashedConfimPassword,
      birthday: birthday,
      country: country,
    });

    // Guardamos el usuario que antes creamos con todos los valores.
    const savedUser = await newUser.save();
    // Retornamos el nuevo usuario.
    return savedUser;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { newUser };
