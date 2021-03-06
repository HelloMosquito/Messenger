const { loginService } = require("../services/login.service");
const { success, fail } = require("../utils/httpresult");

const loginRouter = async (req, res) => {
  const { email, password } = req.query;
  try {
    success(res, await loginService(email, password));
  } catch (err) {
    fail(res, err);
  }
};

module.exports = { loginRouter };
