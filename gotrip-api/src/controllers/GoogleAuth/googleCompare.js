const { User } = require("../../db");
const tokenSing = require("../UserControllers/generateToken")

const googleCompare = async (mail, disName) => {
  try {
    console.log(mail);
    console.log(disName);
    const userTempt = await User.findOne({ where: { email: mail } });
    console.log(userTempt);
    if (!userTempt) {
      const userCreated = await User.create({
        name: disName,
        email: mail,
        password: "",
        gender: "Not Available",
        address: "Not Available",
        dniPasaport: "Not available",
        rol: "user",
        postalCode: "Not Available",
        phone: "Not available",
        phoneCode: 'Not available :)',
        thirdPartyCreated: false,
        confirmPassword: "",
        birthday: "Not Available",
        country: "Not available",
        status: true,
      });
      const tokenSession = await tokenSing(userTempt);
      return {
        data: userCreated,
        tokenSession,
        createdInBD: true,
      };
    }
    const tokenSession = await tokenSing(userTempt);
    
    return {
      data: userTempt,
      tokenSession,
      createdInBD: false,
    };
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

module.exports = { googleCompare };