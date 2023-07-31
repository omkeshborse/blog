const express = require("express");
const {time} = require('../controllers/blog.js')
const router = express.Router();

router.get('/' , time) ;

module.exports = router ;