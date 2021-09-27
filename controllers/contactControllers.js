const Customer = require('../models/contact')

exports.getAllContact = async (req, res, next) => {
    try {
        let [contacts, _] = await Customer.findAll(req.params.businessID);
        res.status(200).json({
            status_code: 0,
            status_message: "Success",
            contacts
    })
    } catch (err) {
        console.log(err);
        res.status(200).json({
            status_code: 400,
            status_message: "Error: Internal Server Error"
        })
    }
}