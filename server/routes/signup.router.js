const { signupService } = require("../services/signup.service");
const { success, fail } = require("../utils/httpresult");

const signupRouter = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    success(res, await signupService(username, email, password));
  } catch (err) {
    fail(res, err);
  }
};

module.exports = { signupRouter };
