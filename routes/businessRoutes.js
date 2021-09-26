const express = require('express');
const businessControllers = require("../controllers/businessControllers");
const router = express.Router();

// business routes
router.route("/signupbusiness").post(businessControllers.signupbusiness);

module.exports = router;
