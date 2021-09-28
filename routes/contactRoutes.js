const express = require('express');
const contactControllers = require("../controllers/contactControllers");
const router = express.Router();

// contact routes
router.route("/:businessID").get(contactControllers.getAllContact);

module.exports = router;
