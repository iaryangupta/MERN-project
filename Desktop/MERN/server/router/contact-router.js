const express = require("express");
const router= express.Router();
const contactForm = require("../controllers/contact-controller")

// contect form passed as body in request
router.route("/contact").post(contactForm);

module.exports = router;