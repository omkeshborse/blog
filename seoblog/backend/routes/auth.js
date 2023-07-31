const express = require("express");
const { signup } = require('../controllers/auth.js');

/* validator  */
const {runValidation} =require('../validators/index.js')
const {userSignupValidator} = require('../validators/auth.js')
const router = express.Router();

router.post("/signup", userSignupValidator, runValidation,signup);

module.exports = router;
