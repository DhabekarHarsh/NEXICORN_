const express = require("express");
const { sequelize } = require("../models/index.js");
const router = express.Router();
const bcrypt = require("bcrypt");


const { userauth } = sequelize.models;

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, phno, password } = req.body;

  try {
    // Check if user with the same phone number already exists
    const foundUser = await userauth.findOne({
      where: { email },
    });

    if (foundUser) {
      console.log("Already existing user is ",foundUser);
      return res.status(409).send("User already exists! Please login");
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUserAuth = await userauth.create({
      name,
      email,
      phno,
      password: hashedPassword,
    });
    
    res.send("User registration successful");
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send("Cannot register user at the moment!");
  }
});

module.exports = router;
