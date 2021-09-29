const express = require('express');
const authenControllers = require("../controllers/authenticationControllers");
const router = express.Router();

// authentication routes
router.route("/login").post(authenControllers.login);

router.route("/register").post(authenControllers.register);

router.route("/change/password").post(authenControllers.changePassword);

module.exports = router;
