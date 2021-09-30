const Customer = require("../models/customer");

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
    if (err.code == 1062) {
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
