const mysql = require('../config/mysql');

class Customer {
    constructor(businessID, name, email, phone, address) {
        this.businessID = businessID
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
    }

    async save() {
        let sql = `
        INSERT INTO customer(
        business_id,
        name,
        email, 
        phone, 
        address
        )VALUES(
        '${this.businessID}', 
        '${this.name}', 
        '${this.email}', 
        '${this.phone}', 
        '${this.address}'
        )`

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
}

module.exports = Customer;