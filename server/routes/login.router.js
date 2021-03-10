const { loginService } = require("../services/login.service");
const { success, fail } = require("../utils/httpresult");

const loginRouter = async (req, res) => {
  const { email, password } = req.query;
  try {
    let loginResponse = await loginService(email, password);
    // success(res, await loginService(email, password));
    success(res, loginResponse);
  } catch (err) {
    fail(res, err);
  }
};

module.exports = { loginRouter };
