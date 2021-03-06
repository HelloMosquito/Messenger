const { findUserByEmail } = require("../dal/dao/user.dao");
const { createToken } = require("../utils/jwt");

const loginService = async (email, password) => {
  try {
    if (!email || !password) {
      throw new Error("Missing essential parameter(s)");
    }
    let user = await findUserByEmail(email);
    let token = "Bearer " + createToken({ email: email });
    let data = {
      token: token,
      data: user,
    };
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = { loginService };
