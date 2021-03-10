const { checkToken } = require("../utils/jwt");

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers.authentication;
  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    try {
      if (checkToken(token)) {
        let loginStatus = {
          logged_in: true,
        };
        return res.status(200).json(loginStatus);
      }
    } catch (err) {
      let loginStatus = {
        logged_in: false,
        msg: "Invalid Token",
      };
    }
  }
  next();
};

module.exports = { authenticate };
