const mysql = require('../config/mysql');

class Vendor {
    constructor(businessID, name, email, phone, address) {
        this.businessID = businessID
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
    }

    async save() {
        let sql = `
        INSERT INTO vendor(
        business_id,
        first_name, 
        last_name, 
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

        const [newVendor, _] = await mysql.execute(sql);
        return newVendor
    }

    async deleteByID(id) {
        let sql = `DELETE FROM vendor WHERE vendor_id = ${id};`

        const [result, _] = await mysql.execute(sql);
        return result
    }

    // static findByID(id) {
    //     let sql = `SELECT * FROM customer WHERE id = ${id}`
    //     return mysql.execute((sql))
    // }
    //
    // static findAll() {
    //     let sql = `SELECT * FROM customer`
    //     return mysql.execute((sql))
    // }
}

module.exports = Vendor;