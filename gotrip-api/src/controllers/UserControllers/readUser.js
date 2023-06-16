const { User } = require("../../db");

const readUser = async () => {
  

  try {
    const users = await User.findAll();
    

    return users
  
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = { readUser };
