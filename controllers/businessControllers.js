const bcrypt = require("bcryptjs");
const Business = require("../models/business");
const Authentication = require("../models/authentication");
const sendMail = require("../config/nodemailer");

exports.signupbusiness = async function (req, res) {
  try {
    const { name, dateEstablished, password, email } = req.body;

    let [business] = await Business.findByName(req.body.name);
    console.log(business);
    console.log(business.length);

    //If the business name already exist, can not create an account
    if (business.length !== 0) {
      res.status(409).json({
        status_code: 409,
        error: "Business name is already registered",
      });
    } else {
      const newBusiness = new Business(name, dateEstablished);

      let businessID = await newBusiness.save();

      //Encrypt the user's password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          const newEmployee = new Authentication(
            businessID.insertId,
            "Admin",
            email,
            hash,
            "",
            "",
            "",
            "",
            "",
            "Admin"
          );
          newEmployee.save();
        });
      });

      sendMail(
        email,
        "Welcome to Lynk! Business Registration Successful",
        "Congratulations on successfully registering " +
          name +
          " on Lynk!\nYour can now login in with " +
          email +
          " on https://team42-crm.herokuapp.com/login to take your business to the next level.\n\n*Lynk - Founded in 2021 - is a Contact Relationship Manager that is specifically designed for restaurants. It empowers restaurant managers and staff to efficiently manage their contacts as well as keep track of contact activity. Additionally, the CRM displays key statistics that can used to by the restaurant management to assist in decision making."
      );

      res.status(200).json({
        status_code: 200,
        status_message: "Success",
        business: {
          name: name,
          businessID: businessID.insertId,
          dateEstablished: dateEstablished,
        },
        admin: {
          name: "Admin",
          role: "Admin",
          email: email,
          password: password,
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status_code: 409,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.deleteBusiness = async (req, res) => {
  try {
    const businessID = req.params.businessID;
    const newBusiness = new Business();

    let result = newBusiness.deleteByID(businessID);
    console.log(result)
    res.status(200).json({
      status_code: 200,
      status_message: "Success: Business Delete",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};