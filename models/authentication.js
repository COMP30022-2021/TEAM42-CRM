const mysql = require('../config/mysql');

class Authentication {
    constructor(businessID, name, email, password, address, birthday, gender, phone, startDate, role) {
        this.businessID = businessID
        this.name = name
        this.email = email
        this.password = password
        this.address = address
        this.birthday = birthday
        this.gender = gender
        this.phone = phone
        this.startDate = startDate
        this.role = role
    }

    async save() {
        let sql = `
        INSERT INTO employee(
        business_id,
        name,
        email, 
        password,
        address,
        birthday,
        gender,
        phone,
        date_joined,
        role
        )VALUES(
        '${this.businessID}', 
        '${this.name}', 
        '${this.email}', 
        '${this.password}',
        '${this.address}', 
        '${this.birthday}', 
        '${this.gender}',
        '${this.phone}', 
        '${this.startDate}', 
        '${this.role}' 
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

    async deleteByID(id) {
        let sql = `DELETE FROM employee WHERE employee_id = ${id};`

        const [result, _] = await mysql.execute(sql);
        return result
    }

    static findEmployeeByEmail(email) {
        let sql = `SELECT * FROM employee WHERE email = '${email}'`
        return mysql.execute((sql))
    }

    static getByID(id) {
        let sql = `SELECT 
        business_id,
        name,
        email, 
        password,
        address,
        birthday,
        gender,
        phone,
        date_joined,
        role
        FROM employee WHERE employee_id = ${id}`
        return mysql.execute((sql))
    }

    // this can get password back, not recommend for normal search api
    static findEmployeeByID(employeeID) {
        let sql = `SELECT * FROM employee WHERE employee_id = ${employeeID}`
        return mysql.execute((sql))
    }

    static getNumberOfEmployees(businessID) {
        let sql = `SELECT COUNT(DISTINCT employee_id) as total_employees FROM employee WHERE business_id = ${businessID}`
        return mysql.execute((sql))
    }
}

module.exports = Authentication;
