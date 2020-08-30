const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verify = require("./verifyToken");

//get a verified users information

router.get("/", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    const { name, email, phone, date, findUs, password } = user;
    res.json({ user: { name, email, phone, date, findUs, password} });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
