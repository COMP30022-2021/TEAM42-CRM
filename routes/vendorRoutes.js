const express = require('express');
const vendorControllers = require("../controllers/vendorControllers");
const router = express.Router();

// post to create a new customer
router.route("/create").post(vendorControllers.createNewVendor);

// get to delete a existing vendor
router.route("/delete/:id").get(vendorControllers.deleteVendor);

router.route("/getNumberOfVendors:businessID").get(vendorControllers.getNumberOfVendors);

router.route("/findAll:businessID").get(vendorControllers.findAll);

module.exports = router;
