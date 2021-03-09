require("dotenv").config();
const express = require("express");
const router = express.Router();

const { loginRouter } = require("./login.router");
const { signupRouter } = require("./signup.router");
const { authenticate } = require("../middleware/authenticate.middle");

router.post("/auth/login", authenticate, loginRouter);
router.post("/auth/signup", signupRouter);

router.use("/auth/messenger", authenticate);

module.exports = router;
