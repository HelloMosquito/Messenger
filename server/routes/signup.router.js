const { signupService } = require("../services/signup.service");
const { success, fail } = require("../utils/httpresult");

const signup = async (req, res) => {
  const { username, email, password } = req.query;
  try {
    success(res, await signupService(username, email, password));
  } catch (err) {
    fail(res, err);
  }
};

module.exports = { signup };
