const bcrypt = require("bcryptjs");
const Authentication = require("../models/authentication");

exports.login = async (req, res) => {
  try {
    let [authentication] = await Authentication.findEmployeeByEmail(
      req.body.email
    );
    console.log(authentication);

    if (authentication.length === 0) {
      res.status(200).json({
        success: false,
        error: "This email is not registered",
      });
    } else {
      bcrypt.compare(
        req.body.password,
        authentication[0].password,
        (err, isMatch) => {
          if (isMatch) {
            res.status(200).json({
              success: true,
              employee: {
                employee_id: authentication[0].employee_id,
              },
            });
          } else {
            res.status(409).json({
              error: err,
              message: "Incorrect password",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async function (req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    let [authentication] = await Authentication.findEmployeeByEmail(
      req.body.email
    );
    console.log(authentication);
    console.log(authentication.length);
    //If the email already exist, can not create an account
    if (authentication.length !== 0) {
      res.status(409).json({
        status_code: 401,
        status_message: "Error: Email already registered",
      });
    } else {
      const newEmployee = new Authentication(
        firstName,
        lastName,
        email,
        password
      );
      //Encrypt the user's password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newEmployee.password, salt, (err, hash) => {
          if (err) throw err;
          newEmployee.password = hash;
          newEmployee.save().then((employee) => {
            res.json({
              employee: {
                givenName: newEmployee.firstName,
                familyName: newEmployee.lastName,
                email: newEmployee.email,
                password: newEmployee.password,
              },
            });
          });
        });
      });
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
