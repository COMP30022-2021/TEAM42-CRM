const mysql = require('../config/mysql');

class Vendor {
    constructor(businessID, name, email, phone, address, rate, tags, gender) {
        this.businessID = businessID
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.rate = rate
        this.tags = tags
        this.gender = gender
    }

    async save() {
        let sql = `
        INSERT INTO vendor(
        business_id,
        name,
        email, 
        phone, 
        address,
        unit_cost,
        tag,
        gender
        )VALUES(
        '${this.businessID}', 
        '${this.name}', 
        '${this.email}', 
        '${this.phone}', 
        '${this.address}',
        '${this.rate}', 
        '${this.tags}', 
        '${this.gender}'
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