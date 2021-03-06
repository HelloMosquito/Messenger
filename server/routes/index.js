require("dotenv").config();
const express = require("express");
const router = express.Router();

const { loginRouter } = require("./login.router");
const { signup } = require("./signup.router");
const { authenticate } = require("../middleware/authenticate.middle");

router.post("/auth/login", authenticate, loginRouter);
router.post("/auth/signup", signup);

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Welcome!" });
});

module.exports = router;
