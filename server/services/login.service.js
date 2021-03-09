const bcrypt = require("bcrypt");
const { findUserByEmail } = require("../dal/dao/user.dao");
const { createToken } = require("../utils/jwt");

const loginService = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Missing essential parameter(s)");
    }
    let user = await findUserByEmail(email);
    let loginResponse;
    if (!user) {
      loginResponse = {
        logged_in: false,
        msg: "User doesn't exist.",
      };
      return loginResponse;
    }
    if (!bcrypt.compareSync(password, user.passwd)) {
      loginResponse = {
        logged_in: false,
        msg: "Invalid password, please try again.",
      };
      return loginResponse;
    }
    let token = "Bearer " + createToken({ email: email });
    loginResponse = {
      logged_in: true,
      token: token,
    };
    return loginResponse;
  } catch (err) {
    throw err;
  }
};

module.exports = { loginService };
