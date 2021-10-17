const transaction = require("../models/transaction");

exports.getNumberOfTransactions = async (req, res) => {
  try {
    let [num, _] = await transaction.getNumberOfTransactions();
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      num
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getNumberOfVisitors = async (req, res) => {
  try {
    let [num, _] = await transaction.getNumberOfVisitors();
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      num
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getTotalRevenueByDate = async (req, res) => {
  try {
    let {start_date, end_date} = req.body
    let [revenue, _] = await transaction.getTotalRevenueByDate(start_date, end_date);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      revenue
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getOneYearRevenueByQuarterInYear = async (req, res) => {
  try {
    let currentYear = req.params.year
    let [revenue, _] = await transaction.getOneYearRevenueByQuarterInYear(currentYear);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      revenue
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getOneCustomerTransactionHistory = async (req, res) => {
  try {
    let customerID = req.params.customerID
    let [history, _] = await transaction.getOneCustomertransactionHistory(customerID);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      history
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
