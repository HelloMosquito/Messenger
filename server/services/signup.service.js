const { addUser } = require("../dal/dao/user.dao");
const { findUserByEmail } = require("../dal/dao/user.dao");
const { encrypt } = require("../utils/secrets");
const { createToken } = require("../utils/jwt");

const checkSignupEmail = async (email) => {
  let registeredEmail = await findUserByEmail(email);
  return registeredEmail !== null;
};

let signupService = async (username, email, passwd) => {
  try {
    if (!username || !email || !passwd) {
      throw new Error("Missing necessary parameter(s)");
    }
    let signupResponse;
    if (await checkSignupEmail(email)) {
      signupResponse = {
        signedup: false,
        msg: "This email has been registered.",
      };
      return signupResponse;
    }
    await addUser(username, email, encrypt(passwd));
    let token = "Bearer " + createToken({ email: email });
    signupResponse = {
      signedup: true,
      token: token,
    };
    return signupResponse;
  } catch (err) {
    throw err;
  }
};

module.exports = { signupService };
