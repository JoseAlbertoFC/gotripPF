const { User } = require("../db");


const googleAuthDal = {
  registerWithGoogle: async (oauthUser) => {
    console.log(oauthUser);
    const isUserExists = await User.findOne({
      where: { email: oauthUser.email },
    });
    if (isUserExists) {
      const failure = {
        message: "User already Registered.",
      };
      return { failure };
    }

    const user = new User({
      name: oauthUser.displayName,
      thirdPartyCreated: true,
      email: oauthUser.email,
      photoUser: null,
      password: "",
      gender: "Not Available",
      address: "Not Available",
      dniPasaport: "Not available",
      rol: "user",
      postalCode: "Not Available",
      phone: "Not available",
      phoneCode: "Not available :)",
      confirmPassword: "",
      birthday: "Not Available",
      country: "Not available",
      status: true,
    });
    await user.save();
    const success = {
      message: "User Registered.",
    };
    return { success };
  },
};

module.exports = googleAuthDal;
