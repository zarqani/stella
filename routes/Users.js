const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

// findAllItem = async () => {
//   const users1 = await User.findAll();
//   console.log(users1.every((user) => user instanceof User)); // true
//   console.log("All users:", JSON.stringify(users1, null, 2));
// };

// findAllItem();

process.env.SECRET_KEY = "secret";

users.post("/register", async (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today,
  };

  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // .then((user) => {
  if (!user) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      userData.password = hash;
      User.create(userData)
        .then((user) => {
          res.json({ status: user.email + " registered" });
        })
        .catch((err) => {
          res.send("error: " + err);
        });
    });
  } else {
    res.json({ error: "User already exists" });
  }
  // })
  // .catch((err) => {
  //   res.send("error: " + err);
  // });
});

users.post("/login", async (req, res) => {
  console.log("req.body.email : ", req.body.email);

  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // .then((user) => {
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.dataValues.password)) {
      let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440,
      });
      res.send(token);
    } else {
      res.status(400).json({ error: "User does not exist" });
    }
  } else {
    res.status(400).json({ error: "User does not exist" });
  }
  // })
  // .catch((err) => {
  //   res.status(400).json({ error: err });
  // });

  // console.log(user, "useruseruser111111111111");
});

module.exports = users;
