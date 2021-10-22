const Vendor = require('../models/vendor')
const redis = require("../config/redis")
const url = require('url');

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
        if(err.code === 1062) {
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
        let uriObj = url.parse(req.url, true)
        const businessId = uriObj.query.businessID;
        let key = "business_" + businessId;
        redis.zrevrange(key, 0, 20, (err, reply) => {
            if (err) {
                console.log(err);
            } else {
                for (let i = 0; i < reply.length; i++) {
                    let data = JSON.parse(reply[i]);
                    if (data.role === "vendor" && data.id === vendorId) {
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

// exports.getNumberOfVendors = async (req, res) => {
//     try {
//         let businessID = req.params.businessID;
//         let [num, _] = await Vendor.getNumberOfVendors(businessID);
//         res.status(200).json({
//             status_code: 200,
//             status_message: "Success",
//             num
//         })
//     } catch (err) {
//         console.log(err);
//         res.status(400).json({
//             status_code: 400,
//             status_message: "Error: Internal Server Error",
//         });
//     }
// };

exports.findAll = async (req, res) => {
    try {
        let businessID = req.params.businessID;
        let [vendors, _] = await Vendor.findAll(businessID);
        res.status(200).json({
            status_code: 200,
            status_message: "Success",
            vendors
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error",
        });
    }
};
