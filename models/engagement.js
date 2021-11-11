const mysql = require("../config/mysql");

class Engagement {
  constructor(vendor_id, employee_id, business_id, date, purpose, rating) {
    this.vendor_id = vendor_id;
    this.employee_id = employee_id;
    this.business_id = business_id;
    this.date = date;
    this.purpose = purpose;
    this.rating = rating;
  }

  async save() {
    let sql = `
        INSERT INTO Order(
        vendor_id, 
        employee_id,
        business_id,
        date,
        purpose,
        rating
        )VALUES(
        '${this.vendor_id}',
        '${this.employee_id}',
        '${this.business_id}',
        '${this.date}',
        '${this.purpose}',
        '${this.rating}'
        )`;

    const [newEngagement, _] = await mysql.execute(sql);
    return newEngagement;
  }

  static findAll(vendorID) {
    let sql = `SELECT * FROM engagement WHERE vendor_id =  ${vendorID}`
    return mysql.execute((sql))
  }
}

module.exports = Engagement;
