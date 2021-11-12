const OrderDetail = require("../models/orderDetail");
const transaction = require("../models/transaction");
const Order = require("../models/orderDetail");

exports.addProduct = async (req, res) => {
  try {
    let { product_id, quantity, transaction_id } = req.body;
    let newOrder = new Order(product_id, quantity, transaction_id);


    newOrder.save().then((order) => {
      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        transaction_id: transaction_id,
        order_id: order.insertId
      });
    });
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

exports.getProductQuarterlyRevenueInYear = async (req, res) => {
  try {
    let id = req.params.id;
    let { product_id, currentYear } = req.body;

    let [product, _] = await OrderDetail.getProductQuarterlyRevenueInYear(
      product_id,
      currentYear,
      id
    );
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getAllSoldProducts = async (req, res) => {
  try {
    let id = req.params.id;
    let { sortOrder, limit } = req.body;

    let [products, _] = await OrderDetail.getAllSoldProducts(
      sortOrder,
      limit,
      id
    );
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
