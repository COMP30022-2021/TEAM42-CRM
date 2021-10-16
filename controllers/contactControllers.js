const Contact = require('../models/contact')
const Vendor = require('../models/vendor')
const Customer = require('../models/customer')
const Employee = require('../models/authentication')
const url = require('url');
const redis = require('../config/redis')

exports.getAllContact = async (req, res, next) => {
    const session = req.session;
    // if (!session.employee_id) {
    //     console.log("not login")
    //     res.status(401).json({
    //         status_code: 401,
    //         status_message: "Unauthorised: Please Login First",
    //     })
    //     return;
    // }
    try {
        let uriObj = url.parse(req.url, true)
        if (uriObj.query.sort) {
            let sort = uriObj.query.sort;
            if (sort === "name" || sort === "email" || sort === "gender" || sort === "role") {
                console.log(sort);
                let [contacts, _] = await Contact.findAllWithSort(req.params.businessID, sort);
                res.status(200).json({
                    status_code: 200,
                    status_message: "Success",
                    sort: sort,
                    contacts
                })
            }
        } else {
            let [contacts, _] = await Contact.findAll(req.params.businessID);
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

exports.getSingleContact = async (req, res, next) => {
    try {
        let uriObj = url.parse(req.url, true)
        if (uriObj.query.id && uriObj.query.role) {
            let id = uriObj.query.id;
            let role = uriObj.query.role;
            let contact = null;
            if (role === "vendor") {
                [contact, _] = await  Vendor.getByID(id)
            } else if ( role === "customer" ) {
                [contact, _] = await  Customer.getByID(id)
            } else if (role === "employee") {
                [contact, _] = await  Employee.getByID(id)
            } else {
                res.status(200).json({
                    status_code: 409,
                    status_message: "Error: Invalid role" + role,
                })
                return
            }
            //save to redis
            if (contact.length !== 0) {
                let jsonObj = {
                    id: id,
                    name: contact[0].name,
                    gender: contact[0].gender,
                    role: role,
                    phone: contact[0].phone,
                    email: contact[0].email
                }
                let jsonString = JSON.stringify(jsonObj);
                let timestamp = Date.now()
                let key = "business_" + contact[0].business_id;
                console.log(jsonString);
                console.log(timestamp);
                console.log(key);
                redis.zadd(key, Date.now(), jsonString)
            }

            res.status(200).json({
                status_code: 200,
                status_message: "Success",
                contact
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

exports.getRecentContact = async (req, res, next) => {
    let businessID = req.params.businessID;
    try {
        //
        let key = "business_" + businessID;
        // query redis for data
        let result = redis.zrevrange(key, 0, 20, (err, reply) => {
            if (err) {
                console.log(err);
            } else {
                let data = [];
                for (var i = 0; i < reply.length; i++) {
                    data.push(JSON.parse(reply[i]));
                }
                console.log(data)
                res.status(200).json({
                    status_code: 200,
                    status_message: "Success",
                    data
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status_code: 400,
            status_message: "Error: Internal Server Error"
        })
    }
}