const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verify = require("./verifyToken");

//get a verified users information

router.get("/", verify, async (req, res) => {
  try {
    const user = await User.findById(req.user);
    const { name, email, date } = user;
    res.json({ name, email, date });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
