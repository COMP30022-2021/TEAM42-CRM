const mysql = require('../config/mysql');

class Business {
  constructor(name, dateEstablished) {
    this.name = name
    this.dateEstablished = dateEstablished
  }

  async save() {
    let sql = `
        INSERT INTO business(
        name, 
        date_established
        )VALUES(
        '${this.name}', 
        '${this.dateEstablished}'
        )`

    const [newBusiness, _] = await mysql.execute(sql);
    return newBusiness
  }

  static findByName(name) {
    let sql = `SELECT * FROM business WHERE name = '${name}'`
    return mysql.execute((sql))
  }

  async deleteByID(id) {
    let sql = `DELETE FROM business WHERE business_id = ${id};`

    const [result, _] = await mysql.execute(sql);
    return result
  }
}

module.exports = Business;
