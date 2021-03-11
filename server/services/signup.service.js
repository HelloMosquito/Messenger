const { addUser } = require("../dal/dao/user.dao");
const { findUserByEmail } = require("../dal/dao/user.dao");
const { encrypt } = require("../utils/secrets");

const checkSignupEmail = async (email) => {
  let registeredEmail = await findUserByEmail(email);
  return registeredEmail !== null;
};

let signupService = async (username, email, passwd) => {
  try {
    if (!username || !email || !passwd) {
      throw new Error("Missing necessary parameter(s)");
    }
    // let checkEmail = await findUserByEmail(email);
    let signupResponse;
    // if (checkEmail !== null) {
    if (await checkSignupEmail(email)) {
      signupResponse = {
        signedup: false,
        msg: "This email has been registered.",
      };
      return signupResponse;
    }
    await addUser(username, email, encrypt(passwd));
    signupResponse = {
      signedup: true,
    };
    return signupResponse;
  } catch (err) {
    throw err;
  }
};

module.exports = { signupService };
