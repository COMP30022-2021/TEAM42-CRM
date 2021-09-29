const bcrypt = require("bcryptjs");
const Business = require("../models/business");
const Authentication = require("../models/authentication");

exports.signupbusiness = async function (req, res) {
  try {
    const {name, dateEstablished, password, email} = req.body;

    let [business,] = await Business.findByName(req.body.name);
    console.log(business)
    console.log(business.length)

    //If the business name already exist, can not create an account
    if (business.length !== 0) {
      res.status(409).json({error: "Business name is already registered"});
    } else {
      const newBusiness = new Business(
        name,
        dateEstablished,
      );

      const newEmployee = new Authentication(
        "",
        email,
        password,
      );

      await newBusiness.save();


      //Encrypt the user's password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newEmployee.password, salt, (err, hash) => {
          if (err) throw err;
          newEmployee.password = hash;
          newEmployee.save();
        });
      });
    }

    res.status(200).json({
      status_code: 0,
      status_message: "Success",
      business: {
        name: name,
        dateEstablished: dateEstablished,
      },
      employee: {
        email: email,
        password: password,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error"
    })
  }
};
