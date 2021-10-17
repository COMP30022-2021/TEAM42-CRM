const mysql = require('../config/mysql');

class Product {
  constructor(name, unit_price) {
    this.name = name
    this.unit_price = unit_price
  }

  async save() {
    let sql = `
        INSERT INTO product(
        name, 
        unit_price
        )VALUES(
        '${this.name}', 
        '${this.unit_price}'
        )`

    const [newProduct, _] = await mysql.execute(sql);
    return newProduct
  }

  static findAll() {
    let sql = `SELECT * FROM product`
    return mysql.execute((sql))
  }
}

module.exports = Product;
