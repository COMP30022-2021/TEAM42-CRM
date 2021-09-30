const express = require("express");
const customerControllers = require("../controllers/customerControllers");
const router = express.Router();

// post to create a new customer
router.route("/create").post(customerControllers.createNewCustomer);

// get to delete a existing customer
router.route("/delete/:id").get(customerControllers.deleteCustomer);

module.exports = router;
