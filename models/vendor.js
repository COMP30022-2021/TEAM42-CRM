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

    static updateVendor(email, address, tags, phone, rate, vendorID) {
        let sql = `UPDATE vendor SET email='${email}',address='${address}',tag='${tags}',phone='${phone}',unit_cost='${rate}' WHERE vendor_id = ${vendorID}`
        return mysql.execute(sql);
    }

    async deleteByID(id) {
        let sql = `DELETE FROM vendor WHERE vendor_id = ${id};`

        const [result, _] = await mysql.execute(sql);
        return result
    }

    static getByID(id) {
        let sql = `SELECT 
        business_id,
        vendor_id,
        name,
        email, 
        phone, 
        address,
        unit_cost AS rate,
        tag AS tags,
        gender 
        FROM vendor WHERE vendor_id = ${id};`

        return mysql.execute(sql);
    }

    static getNumberOfVendors(businessID) {
        let sql = `SELECT COUNT(DISTINCT vendor_id) as total_vendors FROM vendor WHERE business_id = ${businessID}`
        return mysql.execute((sql))
    }

    static findAll(businessID) {
        let sql = `SELECT * FROM vendor WHERE business_id = ${businessID}`
        return mysql.execute((sql))
    }
}

module.exports = Vendor;
