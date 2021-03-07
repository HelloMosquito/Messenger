const { checkToken } = require("../utils/jwt");

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers.authentication;
  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    try {
      if (checkToken(token)) {
        let loginStatus = {
          loginSuccess: true,
        };
        return res.status(200).end(JSON.stringify(loginStatus));
      }
    } catch (err) {
      let loginStatus = {
        loginSuccess: false,
        msg: "invalid token",
      };
      return res.status(403).end(JSON.stringify(loginStatus));
    }
  }
  next();
};

module.exports = { authenticate };
