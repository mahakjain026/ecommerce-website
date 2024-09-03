const express = require("express");
const router = express.Router();
const userController = require('../controller/user.controller');

router.post("/register",userController.SignUpController)
router.post("/login",userController.LogInController)
router.get("/user/profile",userController.GetUserInfo)

module.exports = router ; 