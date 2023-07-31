const { check } = require("express-validator");

const userSignupValidator = [
  check("name").not().isEmpty().withMessage(" name is requied"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six characters long"),
];

module.exports = { userSignupValidator };
