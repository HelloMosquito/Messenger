require("dotenv").config();
const express = require("express");
const router = express.Router();

const { loginRouter } = require("./login.router");
const { signupRouter } = require("./signup.router");
const { authenticate } = require("../middleware/authenticate.middle");

// router.use("/auth/messenger", authenticate);
router.use("/auth", authenticate);

router.post("/auth/login", loginRouter);
router.post("/auth/signup", signupRouter);

module.exports = router;
