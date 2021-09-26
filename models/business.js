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
    let sql = `SELECT * FROM business WHERE name = ${name}`
    return mysql.execute((sql))
  }
}

module.exports = Business;
