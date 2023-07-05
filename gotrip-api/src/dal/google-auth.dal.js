const User = require('../db');

const googleAuthDal = {
  registerWithGoogle: async (oauthUser) => {
    const isUserExists = await User.findOne({
      accountId: oauthUser.id,
      provider: oauthUser.provider,
    });
    if (isUserExists) {
      const failure = {
        message: 'User already Registered.',
      };
      return { failure };
    }

    const user = new User({
      name: oauthUser.displayName,
      thirdPartyCreated: true,
      email: oauthUser.emails[0].value, 
      photoUser: oauthUser.photos[0].value, 
    });
    await user.save();
    const success = {
      message: 'User Registered.',
    };
    return { success };
  },


};

module.exports = googleAuthDal;