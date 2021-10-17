const express = require('express');
const contactControllers = require("../controllers/contactControllers");
const router = express.Router();

// contact routes for all
router.route("/all/:businessID").get(contactControllers.getAllContact);

// contact routes for one
router.route("/single").get(contactControllers.getSingleContact);

// contact routes for recent contacts
router.route("/recent/:businessID").get(contactControllers.getRecentContact);

router.route("/proportion/:businessID").get(contactControllers.getContactProportion);

module.exports = router;
