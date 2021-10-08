const mysql = require('../config/mysql');

class Customer {
    constructor(businessID, name, email, phone, address, firstVisit, birthday, gender) {
        this.businessID = businessID
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.firstVisit = firstVisit
        this.birthday = birthday
        this.gender = gender
    }

    async save() {
        let sql = `
        INSERT INTO customer(
        business_id,
        name,
        email, 
        phone, 
        address,
        first_visit,
        birthday,
        gender
        )VALUES(
        '${this.businessID}', 
        '${this.name}', 
        '${this.email}', 
        '${this.phone}', 
        '${this.address}',
        '${this.firstVisit}',
        '${this.birthday}',
        '${this.gender}'
        )`
        console.log(sql);
        const [newCustomer, _] = await mysql.execute(sql);
        return newCustomer
    }

    async deleteByID(id) {
        let sql = `DELETE FROM customer WHERE customer_id = ${id};`

        const [result, _] = await mysql.execute(sql);
        return result
    }

    static findByID(id) {
        let sql = `SELECT * FROM customer WHERE id = ${id}`
        return mysql.execute((sql))
    }

    static findAll() {
        let sql = `SELECT * FROM customer`
        return mysql.execute((sql))
    }

    static getNumberOfEmployees() {
        let sql = `SELECT COUNT(DISTINCT customer_id) FROM customer`
        return mysql.execute((sql))
    }
}

module.exports = Customer;
