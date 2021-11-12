const mysql = require('../config/mysql');

class Transaction {
  constructor(customer_id, employee_id, business_id, date, number_of_people, total_price) {
    this.customer_id = customer_id
    this.employee_id = employee_id
    this.business_id = business_id
    this.date = date
    this.number_of_people = number_of_people
    this.total_price = total_price
  }

  async save() {
    let sql = `
        INSERT INTO transaction(
        customer_id,
        employee_id,
        business_id,
        date,
        number_of_people,
        total_price
        )VALUES(
        '${this.customer_id}', 
        '${this.employee_id}',
        '${this.business_id}',
        '${this.date}',
        '${this.number_of_people}',
        '${this.total_price}'
        )`

    const [newTransaction, _] = await mysql.execute(sql);
    return newTransaction
  }

  static getNumberOfTransactions(id) {
    let sql = `SELECT COUNT(DISTINCT transaction_id) as total_transactions FROM transaction WHERE business_id = ${id}`
    return mysql.execute((sql))
  }

  static getNumberOfVisitors() {
    let sql = `SELECT SUM(number_of_people) as total_visitors FROM transaction`
    return mysql.execute((sql))
  }

  static getTotalRevenueByDate(startDate, endDate, id) {
    let sql = `SELECT SUM(total_price) FROM transaction WHERE (date BETWEEN '${startDate}' AND '${endDate}')
                                                               AND business_id = ${id}`
    return mysql.execute((sql))
  }

  static getOneYearRevenueByQuarterInYear(currentYear, id) {
    let sql = `SELECT click_date as quarter, IFNULL(b.revenue, 0) as revenue
               FROM (SELECT 1 as click_date UNION ALL
                     SELECT 2 as click_date UNION ALL
                     SELECT 3 as click_date UNION ALL
                     SELECT 4 as click_date) a LEFT JOIN 
                     (SELECT QUARTER(date) as quarter, SUM(total_price) as revenue
                      FROM transaction
                      WHERE YEAR(date) = ${currentYear} AND business_id = ${id}
                      GROUP BY QUARTER(date)) b
                      ON click_date = quarter`
    return mysql.execute((sql))
  }

  static getOneCustomerTransactionHistory(customerID) {
    let sql = `SELECT *
               FROM ((transaction LEFT JOIN customer c on transaction.customer_id = c.customer_id)
                  LEFT JOIN orderdetail on orderdetail.transaction_id = transaction.transaction_id)
                  LEFT JOIN product on product.product_id = orderdetail.product_id
               WHERE c.customer_id = ${customerID}`
    return mysql.execute((sql))
  }
}

module.exports = Transaction;
