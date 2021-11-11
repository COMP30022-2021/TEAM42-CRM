const mysql = require("../config/mysql");

class OrderDetail {
  constructor(product_id, number_of_products, transaction_id) {
    this.product_id = product_id;
    this.number_of_products = number_of_products;
    this.transaction_id = transaction_id;
  }

  async save() {
    let sql = `
        INSERT INTO Order(
        product_id, 
        num_of_products,
        transaction_id
        )VALUES(
        '${this.product_id}',
        '${this.number_of_products}',
        '${this.transaction_id}'
        )`;

    const [newOrder, _] = await mysql.execute(sql);
    return newOrder;
  }

  // static findByName(name) {
  //   let sql = `SELECT * FROM business WHERE name = '${name}'`
  //   return mysql.execute((sql))
  // }

  static getAllSoldProducts(sortOrder, limit, id) {
    let sql = `SELECT product.name, SUM(number_of_products) as sale
               FROM (orderdetail JOIN transaction ON orderdetail.transaction_id = transaction.transaction_id)
               JOIN product ON product.product_id = orderdetail.product_id
               WHERE business_id = ${id}
               GROUP BY product.product_id
               ORDER BY sale
               LIMIT ${limit}`;

    if (sortOrder === "DESC") {
      sql = `SELECT product.name, SUM(number_of_products) as sale
             FROM (orderdetail JOIN transaction ON orderdetail.transaction_id = transaction.transaction_id)
             JOIN product ON product.product_id = orderdetail.product_id
             WHERE business_id = ${id}
             GROUP BY product.product_id
             ORDER BY sale DESC
             LIMIT ${limit}`;
    }

    return mysql.execute(sql);
  }

  static getProductQuarterlyRevenueInYear(product_id, currentYear) {
    let sql = `SELECT click_date as quarter, IFNULL(d.revenue, 0) as revenue
                FROM (SELECT 1 as click_date UNION ALL
                      SELECT 2 as click_date UNION ALL
                      SELECT 3 as click_date UNION ALL
                      SELECT 4 as click_date) c LEFT JOIN
                    (SELECT quarter, SUM(b.revenue) as revenue
                     FROM (SELECT quarter, num * unit_price as revenue
                           FROM (SELECT QUARTER(date) as quarter, product_id, SUM(number_of_products) as num
                                 FROM orderdetail o LEFT JOIN transaction t on o.transaction_id = t.transaction_id
                                 WHERE YEAR(date) = '${currentYear}' AND product_id = '${product_id}'
                                 GROUP BY QUARTER(date), o.product_id) a LEFT JOIN product p on a.product_id = p.product_id) b
                     GROUP BY quarter) d ON quarter = click_date`;
    return mysql.execute(sql);
  }
}

module.exports = OrderDetail;
