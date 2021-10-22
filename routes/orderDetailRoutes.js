const express = require("express");
const orderDetailControllers = require("../controllers/orderDetailControllers");
const router = express.Router();

router.route("/getProductQuarterlyRevenueInYear").post(orderDetailControllers.getProductQuarterlyRevenueInYear);
router.route("/getAllSoldProducts").post(orderDetailControllers.getAllSoldProducts);


module.exports = router;
