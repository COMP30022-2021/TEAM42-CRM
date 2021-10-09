const express = require('express');
const contactControllers = require("../controllers/contactControllers");
const router = express.Router();

// contact routes for all
router.route("/all/:businessID").get(contactControllers.getAllContact);

// contact routes for one
router.route("/single").get(contactControllers.getSingleContact);

module.exports = router;
