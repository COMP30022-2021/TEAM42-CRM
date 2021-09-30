const mysql = require("../config/mysql");

class Contact {
  constructor(businessID) {
    this.businessID = businessID;
  }

  async save() {}

  static findByID(id) {}

  static findAll(businessID) {
    let sql = `
        (SELECT employee_id AS id, name, gender, CONCAT('employee') AS role, phone, email FROM employee WHERE employee.business_id = ${businessID} AND employee.name != 'admin')
        UNION 
        (SELECT customer_id AS id, name, gender, CONCAT('customer') AS role, phone, email FROM customer WHERE customer.business_id = ${businessID})
        UNION 
        (SELECT vendor_id AS id, name, gender, CONCAT('vendor') AS role, phone, email FROM vendor WHERE vendor.business_id = ${businessID});`;
    return mysql.execute(sql);
  }

  static findAllWithSort(businessID, sort) {
    let sql = `
        SELECT * FROM (
        (SELECT employee_id AS id, name, gender, CONCAT('employee') AS role, phone, email FROM employee WHERE employee.business_id = ${businessID} AND employee.name != 'admin')
        UNION 
        (SELECT customer_id AS id, name, gender, CONCAT('customer') AS role, phone, email FROM customer WHERE customer.business_id = ${businessID})
        UNION 
        (SELECT vendor_id AS id, name, gender, CONCAT('vendor') AS role, phone, email FROM vendor WHERE vendor.business_id = ${businessID})
        ) a ORDER BY a.${sort}, a.email LIMIT 1000`;
    return mysql.execute(sql);
  }
}

module.exports = Contact;
