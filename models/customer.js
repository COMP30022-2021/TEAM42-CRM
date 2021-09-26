const mysql = require('../config/mysql');

class Customer {
    constructor(firstName, lastName, email, phone, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.address = address
    }

    async save() {
        let sql = `
        INSERT INTO customer(
        first_name, 
        last_name, 
        email, 
        phone, 
        address
        )VALUES(
        '${this.firstName}', 
        '${this.lastName}', 
        '${this.email}', 
        '${this.phone}', 
        '${this.address}'
        )`

        const [newCustomer, _] = await mysql.execute(sql);
        return newCustomer
    }

    static findByID(id) {
        let sql = `SELECT * FROM customer WHERE id = ${id}`
        return mysql.execute((sql))
    }

    static findAll() {
        let sql = `SELECT * FROM customer`
        return mysql.execute((sql))
    }
}

module.exports = Customer;