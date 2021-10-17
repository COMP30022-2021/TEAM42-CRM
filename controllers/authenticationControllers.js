const bcrypt = require("bcryptjs");
const Authentication = require("../models/authentication");
const redis = require("../config/redis");
const sendMail = require("../config/nodemailer");

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    let [authentication] = await Authentication.findEmployeeByEmail(
      req.body.email
    );
    console.log(authentication);

    if (authentication.length === 0) {
      res.status(409).json({
        status_code: 409,
        success: false,
        status_message: "Error: This email is not registered",
      });
    } else {
      bcrypt.compare(
        req.body.password,
        authentication[0].password,
        (err, isMatch) => {
          console.log(req.body.password);
          console.log(authentication[0].password);
          if (isMatch) {
            // add session for login
            const session = req.session;
            session.bussiness_id = authentication[0].business_id;
            session.employee_id = authentication[0].employee_id;
            res.status(200).json({
              status_code: 200,
              status_message: "Success",
              success: true,
              businessID: authentication[0].business_id,
              employee: {
                employee_id: authentication[0].employee_id,
                name: authentication[0].name,
                email: authentication[0].email,
              },
            });
          } else {
            res.status(409).json({
              status_code: 409,
              success: false,
              status_message: "Error: Incorrect Password",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.register = async function (req, res) {
  try {
    const {
      businessID,
      name,
      email,
      address,
      birthday,
      gender,
      phone,
      startDate,
      isManager,
      contactOnly,
    } = req.body;

    let [authentication] = await Authentication.findEmployeeByEmail(
      req.body.email
    );
    console.log(authentication);
    console.log(authentication.length);
    //If the email already exist, can not create an account
    if (authentication.length !== 0) {
      res.status(409).json({
        status_code: 401,
        status_message: "Error: Email Already Registered",
      });
    } else {
      let role = "Employee";
      let password = 0;
      if (isManager === true) {
        role = "Manager";
      }
      if (contactOnly === false) {
        //Encrypt the user's password
        await bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash("admin", salt, (err, hash) => {
            if (err) throw err;
            const newEmployee = new Authentication(
              businessID,
              name,
              email,
              hash,
              address,
              birthday,
              gender,
              phone,
              startDate,
              role
            );

            sendMail(
              email,
              "Register Of A New Account",
              "Welcome to Lynk \nemail is: " + email + "\npassword is: admin"
            );

            newEmployee.save().then((employee) => {
              res.json({
                employee: {
                  employeeID: employee.insertId,
                  name: newEmployee.name,
                  email: newEmployee.email,
                  role: newEmployee.role,
                  password: hash,
                },
              });
            });
          });
        });
      } else {
        // password is 0, when not creating an account
        const newEmployee = new Authentication(
          businessID,
          name,
          email,
          password,
          address,
          birthday,
          gender,
          phone,
          startDate,
          role
        );
        newEmployee.save().then((employee) => {
          res.json({
            status_code: 0,
            status_message: "Success",
            employee: {
              employeeID: employee.insertId,
              name: newEmployee.name,
              email: newEmployee.email,
              password: password,
            },
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { employeeID, oldPassword, newPassword } = req.body;

    let [authentication] = await Authentication.findEmployeeByID(employeeID);
    console.log(authentication);

    if (authentication.length === 0) {
      res.status(409).json({
        status_code: 409,
        status_message: "This Employee ID Not Exist",
      });
    } else {
      bcrypt.compare(
        oldPassword,
        authentication[0].password,
        (err, isMatch) => {
          console.log(oldPassword);
          console.log(authentication[0].password);
          if (isMatch) {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newPassword, salt, (err, hash) => {
                if (err) throw err;
                const newAuth = new Authentication();
                newAuth.password = hash;
                let result = newAuth.updatePassword(employeeID);
                console.log(result);
                res.status(200).json({
                  status_code: 0,
                  status_message: "Success: Password Change",
                });
              });
            });
          } else {
            res.status(409).json({
              status_code: 409,
              status_message: "Error: Old Password Is Not Correct",
            });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const newEmployee = new Authentication();

    let result = newEmployee.deleteByID(employeeId);

    console.log(result);
    res.status(200).json({
      status_code: 0,
      status_message: "Success: Employee Delete",
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};

exports.getNumberOfEmployees = async (req, res) => {
  try {
    let businessID = req.params.businessID;
    let [num, _] = await Authentication.getNumberOfEmployees(businessID);
    res.status(200).json({
      status_code: 200,
      status_message: "Success",
      num,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status_code: 400,
      status_message: "Error: Internal Server Error",
    });
  }
};
