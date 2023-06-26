const { User } = require("../../db");
const { verifyToken } = require("./generateToken");

const roleUser = async (token) => {
  try {
    const tokenData = await verifyToken(token);
    const user = await User.findByPk(tokenData._id)

    return user ? user : null;
  } catch (e) {
    return ({ error: e.message });
  }
};

module.exports = roleUser;