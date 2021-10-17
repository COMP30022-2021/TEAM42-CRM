const mysql = require('../config/mysql');

class Product {
  constructor(product_id, name, unit_price) {
    this.product_id = product_id
    this.name = name
    this.unit_price = unit_price
  }

  async save() {
    let sql = `
        INSERT INTO product(
        product_id,
        name, 
        unit_price
        )VALUES(
        '${this.product_id}',
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
