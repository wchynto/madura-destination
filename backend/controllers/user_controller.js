const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      const same = await bcrypt.compare(password, user.password);
      if (same) {
        const token = jwt.sign(user.username, process.env.PRIVATE_KEY);
        res.json({ token: token });
      } else {
        res.json({ token: null });
      }
    } else {
      res.json({ token: null });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = { login, register };
