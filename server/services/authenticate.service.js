const jwt = require("../utils/jwt");

const authenticate = (token) => {
  try {
    if (jwt.checkToken(token)) {
      return true;
    }
  } catch (err) {
    console.log("authenticate.service.js");
    throw err;
  }
};

module.exports = { authenticate };
