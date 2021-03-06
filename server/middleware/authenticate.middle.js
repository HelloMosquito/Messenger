const { checkToken } = require("../utils/jwt");

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers.authentication;
  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    try {
      if (checkToken(token)) {
        return res.status(200).send("login successfully");
      }
    } catch (err) {
      return res.status(403).send("invalid token");
    }
  }
  next();
};

module.exports = { authenticate };
