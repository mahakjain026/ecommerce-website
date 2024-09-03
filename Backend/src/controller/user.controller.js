const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUpController = async (req, res) => {
  try {
    const { firstName, lastName, Email, Password } = req.body;

    // Validation for all the required fields
    if (!firstName || !lastName || !Email || !Password) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }
    // user already exist
    existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const newUser = new User({ firstName, lastName, Email, Password });
    await newUser.save();
    return res.status(200).json({ message: "User is created Successfully!!" });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const LogInController = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Validation for all the required fields
    if (!Email || !Password) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }

    // check user exist or not
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    // check password is valid
    const isPasswordvalid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordvalid) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    //generate JWt token after authentication
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const GetUserInfo = async (req, res) => {
  try {
    const userId = req.query.id;
    const user = await User.findOne({_id: userId});
    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }
    user.Password=undefined;
    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { SignUpController, LogInController, GetUserInfo };
