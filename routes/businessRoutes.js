const express = require('express');
const businessControllers = require("../controllers/businessControllers");
const router = express.Router();

// business routes
router.route("/signupbusiness").post(businessControllers.signupbusiness);

router.route("/delete/:businessID").get(businessControllers.deleteBusiness);


module.exports = router;
