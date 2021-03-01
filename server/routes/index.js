require('dotenv').config();
const express = require('express');
const router = express.Router();
// const pool = require('../config/database-config');
const jwt = require('../utils/jwt');
// const loginService = require('../services/login-service');
const { signup } = require('../services/signup-service');
const { encrypt } = require('../utils/secrets');
const { User } = require('../models/user');
const { response } = require('../app');


router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Welcome!" });
});

router.get("/findall", (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users)
    })
    .catch(err => console.log(err));
});

router.get("/find/:id", (req, res) => {
  console.log("hello");
  let {id} = req.params;
  console.log(id);
  User.findByPk(id)
    .then((user) => {
      if(user){
        res.json(user);
      } else {
        res.status(404);
      }
    });
});

router.post("/auth/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.query;
    if (!username || !email || !password) {
      return res.send("missing parameter(s)");
    }
    await signup(username, email, encrypt(password));
    res.status(200).send({user: "hello", token: "world"});
  } catch (err) {
    console.log(err.message);
  }
});

// const generateAccToken = (user) => {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"});
// };

// const generateRefreshToken = (user) => {
//   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
// };

router.get("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(email + ": " + password);

    // const user = {name: email};
    const data = { name: email, login: true };
    const accessToken = jwt.createToken(data);
    res.json({ "accessToken": accessToken });
    // const refreshToken = generateRefreshToken(user);
    // res.json({"accessToken": accessToken, "refreshToken": refreshToken});
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
