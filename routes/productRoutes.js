const express = require("express");
const productControllers = require("../controllers/productControllers");
const router = express.Router();

router.route("/create").post(productControllers.createNewProduct);

router.route("/findAll").get(productControllers.findAll);

module.exports = router;
