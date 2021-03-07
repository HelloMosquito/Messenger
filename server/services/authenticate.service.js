const jwt = require("../utils/jwt");

const authenticate = (token) => {
  try {
    if (jwt.checkToken(token)) {
      return true;
    }
  } catch (err) {
    throw err;
  }
};

module.exports = { authenticate };
