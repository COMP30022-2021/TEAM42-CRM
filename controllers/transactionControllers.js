const transaction = require("../models/transaction");
const Order = require("../models/orderDetail")

exports.createNewVisit = async (req, res) => {
  try {
    let { customer_id, employee_id, business_id, date, number_of_people, total_price, product } = req.body;
    let newTransaction = new transaction(customer_id, employee_id, business_id, date, number_of_people, total_price);
    let trans_id;

    newTransaction.save().then((trans) => {
      trans_id = trans.insertId

      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        transaction_id: trans_id,
        product: {
          customer_id: newTransaction.customer_id,
          employee_id: newTransaction.employee_id,
          business_id: newTransaction.business_id,
          date: newTransaction.date
        }
      });
    });

    let newOrder = new Order(product, 1, trans_id)

    newOrder.save().then((order) => {});

  } catch (err) {
    console.log(err);
    if(err.code === 1062) {
      res.status(401).json({
        status_code: 401,
        status_message: "Error: Product Already Exists"
      })
    } else {
      res.status(400).json({
        status_code: 400,
        status_message: "Error: Internal Server Error"
      })
    }
  }
};

exports.getNumberOfTransactions = async (req, res) => {
  try {
    let id = req.params.id
    let [num, _] = await transaction.getNumberOfTransactions(id);
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
    let id = req.params.id
    let [revenue, _] = await transaction.getTotalRevenueByDate(start_date, end_date, id);
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
    let id = req.params.id
    let [revenue, _] = await transaction.getOneYearRevenueByQuarterInYear(currentYear, id);
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
    let [history, _] = await transaction.getOneCustomerTransactionHistory(customerID);
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
