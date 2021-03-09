const jwt = require("jsonwebtoken");
const secret = process.env.ACCESS_TOKEN_SECRET;

let createToken = (payload) => {
  // payload should be object
  return jwt.sign(payload, secret, { expiresIn: "20s" });
};

let checkToken = (token) => {
  jwt.verify(token, secret, (err, validation) => {
    if (err) {
      throw err;
    }
  });
  return true;
};

module.exports = {
  createToken,
  checkToken,
};
