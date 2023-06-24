// En esta carpeta van los controllers de Users
// Porfa crea un archivo para cada controller
const { User } = require("../../db");

const bcrypt = require('bcrypt');

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

  // Vamos a  encryptar la contrasena 

  function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  }

  function hashConfirmPassword(confirmPassword) {
    const saltRounds = 10;
    const hashedConfimPassword = bcrypt.hashSync(confirmPassword, saltRounds);
    return hashedConfimPassword;
  }
  
  

  const hashedPassword = hashPassword(password);

  const hashedConfimPassword = hashConfirmPassword(confirmPassword);

  

  
  

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

    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { newUser };
