const Vendor = require('../models/vendor')

exports.createNewVendor = async (req, res) => {
    try {
        let { businessID, firstName, lastName, email, phone, address } = req.body;
        let newVendor = new Vendor(businessID, firstName, lastName, email, phone, address);

        newVendor.save().then((customer) => {
            res.status(200).json({
                status_code: 0,
                status_message: "Success",
                customer: {
                    businessID: newVendor.businessID,
                    customerID: customer.insertId,
                    email: newVendor.email,
                }
            });
        });
    } catch (err) {
        console.log(err);
        if(err.code == 1062) {
            res.status(200).json({
                status_code: 401,
                status_message: "Error: Duplicate Entry Error"
            })
        } else {
            res.status(200).json({
                status_code: 400,
                status_message: "Error: Internal Server Error"
            })
        }

    }
}