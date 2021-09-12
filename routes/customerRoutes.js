const express = require('express');
const customerControllers = require("../controllers/customerControllers");
const router = express.Router();

// get all customers
router.route("/all").get(customerControllers.getAllCustomers);

// get a single customer by id
router.route("/:id").get(customerControllers.getCustomerById);

// post to create a new customer
router.route("/create").post(customerControllers.createNewCustomer);


module.exports = router;