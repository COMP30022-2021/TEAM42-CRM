const express = require("express");
const transactionControllers = require("../controllers/transactionControllers");
const router = express.Router();

router.route("/getNumberOfTransactions/:id").get(transactionControllers.getNumberOfTransactions);
router.route("/getNumberOfVisitors").get(transactionControllers.getNumberOfVisitors);
router.route("/getTotalRevenueByDate/:id").post(transactionControllers.getTotalRevenueByDate);
router.route("/getOneYearRevenueByQuarterInYear:year/:id").get(transactionControllers.getOneYearRevenueByQuarterInYear);
router.route("/getOneCustomerTransactionHistory:customerID").get(transactionControllers.getOneCustomerTransactionHistory);

module.exports = router;
