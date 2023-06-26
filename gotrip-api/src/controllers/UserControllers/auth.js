const { verifyToken } = require("./generateToken");

const checkAuth = async (token) => {
  try {
    const tokenData = await verifyToken(token);

    return tokenData
  } catch (e) {
    return ({ error: e.message });
  }
};

module.exports = checkAuth;