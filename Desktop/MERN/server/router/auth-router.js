/*In Express.js, express.Router() is a mini Express application without all the server configurations 
but with the ability to define routes, middleware, and even have its own set of route handlers. 
It allows you to modularize your routes and middleware to keep your code organized and maintainable.*/
const express = require("express");
const router= express.Router();
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");

const authControllers= require("../controllers/auth-controller");

// router.route("/").get((req, res) => {
//     res.status(200).send("server mein swagat via router");
// });

// alternate method using controller
router.route("/").get(authControllers.home);

// Validation of input data is done before user registered successfully 
router.route("/register")
  .post(validate(signupSchema), authControllers.register);

router.route("/login").post(authControllers.login);


module.exports = router;