const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Signin to the application

router.post("/signIN",authController.signIN);

// register to the application

router.post("/register",authController.signUp);

module.exports=router;