const Customer = require("../models/customer");
const redis = require("../config/redis")
const url = require('url');

exports.createNewCustomer = async (req, res) => {
  try {
    let {
      businessID,
      name,
      email,
      phone,
      address,
      firstVisit,
      birthday,
      gender,
    } = req.body;
    let newCustomer = new Customer(
      businessID,
      name,
      email,
      phone,
      address,
      firstVisit,
      birthday,
      gender
    );

    newCustomer.save().then((customer) => {
      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        customer: {
          businessID: newCustomer.businessID,
          customerID: customer.insertId,
          email: newCustomer.email,
        },
      });
    });
  } catch (err) {
    console.log(err);
    if (err.code === 1062) {
      res.status(401).json({
        status_code: 401,
        status_message: "Error: Duplicate Entry Error",
      });
    } else {
      res.status(400).json({
        status_code: 400,
        status_message: "Error: Internal Server Error",
      });
    }
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const newCustomer = new Customer();

    let result = newCustomer.deleteByID(customerId);
    let uriObj = url.parse(req.url, true)
    const businessId = uriObj.query.businessID;
    let key = "business_" + businessId;
    redis.zrevrange(key, 0, 20, (err, reply) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < reply.length; i++) {
          let data = JSON.parse(reply[i]);
          if (data.role === "customer" && data.id === customerId) {
            console.log(data);
            redis.zrem(key, reply[i]);
            return;
          }
        }
      }
    });
    console.log(result);
    res.status(200).json({
      status_code: 200,
      status_message: "Success: Customer Delete",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getNumberOfCustomers = async (req, res) => {
  try {
    let businessID = req.params.businessID;
    let [num, _] = await Customer.getNumberOfCustomers(businessID);
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

exports.findAll = async (req, res) => {
  try {
    let businessID = req.params.businessID;
    let [customers, _] = await Customer.findAll(businessID);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      customers
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
}
