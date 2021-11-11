const express = require("express");
const engagementControllers = require("../controllers/engagementControllers");
const router = express.Router();

router.route("/create").post(engagementControllers.createNewEngagement);

router.route("/findAll/:id").get(engagementControllers.findAll);

module.exports = router;
