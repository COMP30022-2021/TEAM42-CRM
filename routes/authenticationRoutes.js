const express = require('express');
const authenControllers = require("../controllers/authenticationControllers");
const router = express.Router();

// authentication routes

// post login as an employee
router.route("/login").post(authenControllers.login);

// post create a new employee
router.route("/register").post(authenControllers.register);

// post change password
router.route("/change/password").post(authenControllers.changePassword);

// get to delete a existing employee
router.route("/delete/:id").get(authenControllers.deleteEmployee);

// router.route("/getNumberOfEmployees:businessID").get(authenControllers.getNumberOfEmployees);

router.route("/findAll:businessID").get(authenControllers.findAll);

// reset password
router.route("/reset/:email").get(authenControllers.forgetPassword);

// update employee
router.route("/update").post(authenControllers.updateEmployee);

module.exports = router;
