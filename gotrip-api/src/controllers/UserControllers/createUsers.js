// En esta carpeta van los controllers de Users
// Porfa crea un archivo para cada controller
const { User } = require("../../db");

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
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      gender: gender,
      address: address,
      dniPasaport: dniPasaport,
      rol: rol,
      postalCode: postalCode,
      phone: phone,
      thirdPartyCreated: thirdPartyCreated,
      phoneCode: phoneCode,
      confirmPassword: confirmPassword,
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
