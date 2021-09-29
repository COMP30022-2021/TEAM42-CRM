const express = require('express');
const vendorControllers = require("../controllers/vendorControllers");
const router = express.Router();

// post to create a new customer
router.route("/create").post(vendorControllers.createNewVendor);


module.exports = router;