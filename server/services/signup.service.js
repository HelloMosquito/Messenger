const { addUser } = require("../dal/dao/user.dao");
const { encrypt } = require("../utils/secrets");

let signupService = async (username, email, passwd) => {
  try {
    if (!username || !email || !passwd) {
      throw new Error("Missing necessary parameter(s)");
    }
    await addUser(username, email, encrypt(passwd));
    let data = {
      signupSuccess: true,
    };
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = { signupService };
