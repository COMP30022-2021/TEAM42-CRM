const mysql = require("../config/mysql");

class Contact {
  constructor(businessID) {
    this.businessID = businessID;
  }

  async save() {}

  static findByID(id) {}

  static findAll(businessID) {
    let sql = `
        (SELECT employee_id AS id, name, gender, CONCAT('employee') AS role, phone, email FROM employee WHERE employee.business_id = ${businessID})
        UNION 
        (SELECT customer_id AS id, name, gender, CONCAT('customer') AS role, phone, email FROM customer WHERE customer.business_id = ${businessID})
        UNION 
        (SELECT vendor_id AS id, name, gender, CONCAT('vendor') AS role, phone, email FROM vendor WHERE vendor.business_id = ${businessID});`;
    return mysql.execute(sql);
  }
}

module.exports = Contact;
