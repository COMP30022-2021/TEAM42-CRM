const express = require("express");
const orderDetailControllers = require("../controllers/orderDetailControllers");
const router = express.Router();

router.route("/create").post(orderDetailControllers.addProduct)
router.route("/getProductQuarterlyRevenueInYear").post(orderDetailControllers.getProductQuarterlyRevenueInYear);
router.route("/getAllSoldProducts:id").post(orderDetailControllers.getAllSoldProducts);


module.exports = router;
