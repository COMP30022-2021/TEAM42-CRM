const Customer = require('../models/contact')
const url = require('url');

exports.getAllContact = async (req, res, next) => {
    try {
        let uriObj = url.parse(req.url, true)
        if (uriObj.query.sort) {
            let sort = uriObj.query.sort;
            if (sort == "name") {
                console.log(sort);
                let [contacts, _] = await Customer.findAllWithSort(req.params.businessID, sort);
                res.status(200).json({
                    status_code: 200,
                    status_message: "Success",
                    sort: sort,
                    contacts
                })
            }
        } else {
            let [contacts, _] = await Customer.findAll(req.params.businessID);
            res.status(200).json({
                status_code: 200,
                status_message: "Success",
                contacts
            })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error"
        })
    }
}