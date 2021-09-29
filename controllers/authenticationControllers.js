const bcrypt = require("bcryptjs");
const Authentication = require("../models/authentication");

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        let [authentication,] = await Authentication.findEmployeeByEmail(req.body.email);
        console.log(authentication);

        if (authentication.length === 0) {
            res.status(200).json({
                success: false,
                error: "This email is not registered",
            });
        }else {
            bcrypt.compare(req.body.password, authentication[0].password, (err, isMatch) => {
                console.log(req.body.password);
                console.log(authentication[0].password)
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
            });
        }
    } catch (err) {
        console.log(err);
    }
}

exports.register = async function (req, res) {
    try {
        const {firstName, lastName, email, password} = req.body;

        let [authentication,] = await Authentication.findEmployeeByEmail(req.body.email);
        console.log(authentication)
        console.log(authentication.length)
        //If the email already exist, can not create an account
        if (authentication.length !== 0) {
            res.status(409).json({
                status_code: 401,
                status_message: "Error: Email already registered"
            });
        } else {
            const newEmployee = new Authentication(
                firstName,
                lastName,
                email,
                password,
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
            status_message: "Error: Internal Server Error"
        })
    }
};

exports.changePassword = async (req, res) => {
    try {
        const {employeeID, oldPassword, newPassword} = req.body;

        let [authentication,] = await Authentication.findEmployeeByID(employeeID);
        console.log(authentication);

        if (authentication.length === 0) {
            res.status(409).json({
                status_code: 409,
                status_message: "This Employee ID Not Exists",
            });
        }else {
            bcrypt.compare(oldPassword, authentication[0].password, (err, isMatch) => {
                console.log(oldPassword);
                console.log(authentication[0].password)
                if (isMatch) {
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newPassword, salt, (err, hash) => {
                            if (err) throw err;
                            const newAuth = new Authentication();
                            newAuth.password = hash
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
            });
        }
    } catch (err) {
        console.log(err);
        res.status(200).json({
            status_code: 400,
            status_message: "Error: Internal Server Error"
        })
    }
}

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
            status_message: "Error: Internal Server Error"
        })
    }
}