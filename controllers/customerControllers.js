const Customer = require('../models/customer')

exports.getAllCustomers = async (req, res, next) => {
    try {
        let [customers, _] = await Customer.findAll();
        res.status(200).json({customers})
    } catch (err) {
        console.log(err);
    }
}

exports.getCustomerById = async (req, res) => {
    try {
        let [customers, _] = await Customer.findByID(req.params.id);
        res.status(200).json({customers})
    } catch (err) {
        console.log(err);
    }
}

exports.createNewCustomer = async (req, res) => {
    try {
        let { first_name, last_name, email, phone, address } = req.body;
        let customer = new Customer(first_name, last_name, email, phone, address);

        customer = await customer.save();
        console.log(customer);
        res.status(201).json({ "message": {customer}})
    } catch (err) {
        console.log(err);
    }
}