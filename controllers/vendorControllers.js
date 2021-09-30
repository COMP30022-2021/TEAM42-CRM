const Vendor = require('../models/vendor')

exports.createNewVendor = async (req, res) => {
    try {
        let { businessID, name, email, phone, address, rate, tags, gender } = req.body;
        let newVendor = new Vendor(businessID, name, email, phone, address, rate, tags, gender);

        newVendor.save().then((vendor) => {
            res.status(200).json({
                status_code: 200,
                status_message: "Success",
                vendor: {
                    businessID: newVendor.businessID,
                    vendorID: vendor.insertId,
                    email: newVendor.email,
                }
            });
        });
    } catch (err) {
        console.log(err);
        if(err.code == 1062) {
            res.status(401).json({
                status_code: 401,
                status_message: "Error: Vendor Already Exists"
            })
        } else {
            res.status(400).json({
                status_code: 400,
                status_message: "Error: Internal Server Error"
            })
        }

    }
}

exports.deleteVendor = async (req, res) => {
    try {
        const vendorId = req.params.id;
        const newVendor = new Vendor();

        let result = newVendor.deleteByID(vendorId);

        console.log(result);
        res.status(200).json({
            status_code: 200,
            status_message: "Success: Vendor Delete",
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error"
        })
    }
}