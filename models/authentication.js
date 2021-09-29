const mysql = require('../config/mysql');

class Authentication {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }

    async save() {
        let sql = `
        INSERT INTO employee(
        first_name, 
        last_name, 
        email, 
        password 
        )VALUES(
        '${this.firstName}', 
        '${this.lastName}', 
        '${this.email}', 
        '${this.password}' 
        )`
        console.log(sql)
        const [newEmployee, _] = await mysql.execute(sql);
        return newEmployee
    }

    async updatePassword(employeeID) {
        let sql = `UPDATE employee SET password = '${this.password}' WHERE employee_id = ${employeeID}`
        const [result, _] = await mysql.execute(sql);
        return result
    }

    static findEmployeeByEmail(email) {
        let sql = `SELECT * FROM employee WHERE email = '${email}'`
        return mysql.execute((sql))
    }

    static findEmployeeByID(employeeID) {
        let sql = `SELECT * FROM employee WHERE employee_id = ${employeeID}`
        return mysql.execute((sql))
    }
}

module.exports = Authentication;
