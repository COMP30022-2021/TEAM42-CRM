const OrderDetail = require("../models/orderDetail");

exports.getProductQuarterlyRevenueInYear = async (req, res) => {
  try {
    let {product_id, currentYear} = req.body

    let [product, _] = await OrderDetail.getProductQuarterlyRevenueInYear(product_id, currentYear);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      product
    })
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
    let {sortOrder, limit} = req.body

    let [products, _] = await OrderDetail.getAllSoldProducts(sortOrder, limit);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      products
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
