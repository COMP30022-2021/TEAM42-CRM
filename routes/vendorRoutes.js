const express = require('express');
const vendorControllers = require("../controllers/vendorControllers");
const router = express.Router();

// post to create a new customer
router.route("/create").post(vendorControllers.createNewVendor);

// get to delete a existing vendor
router.route("/delete/:id").get(vendorControllers.deleteVendor);

module.exports = router;