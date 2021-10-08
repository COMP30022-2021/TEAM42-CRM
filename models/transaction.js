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
        INSERT INTO Order(
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
        '${this.total_price}',
        )`

    const [newTransaction, _] = await mysql.execute(sql);
    return newTransaction
  }

  // static findByName(name) {
  //   let sql = `SELECT * FROM business WHERE name = '${name}'`
  //   return mysql.execute((sql))
  // }

  static getNumberOfTransactions() {
    let sql = `SELECT COUNT(DISTINCT transaction_id) FROM transaction`
    return mysql.execute((sql))
  }

  static getNumberOfVisitors() {
    let sql = `SELECT SUM(number_of_people) FROM transaction`
    return mysql.execute((sql))
  }

  static getTotalRevenueByDate(startDate, endDate) {
    let sql = `SELECT SUM(total_price) FROM transaction WHERE date = BETWEEN '${startDate}' AND '${endDate}'`
    return mysql.execute((sql))
  }

  static getOneYearRevenueByQuarterInYear(currentYear) {
    let sql = `SELECT click_date as quarter, IFNULL(b.revenue, 0) as revenue
               FROM (SELECT 1 as click_date UNION ALL
                     SELECT 2 as click_date UNION ALL
                     SELECT 3 as click_date UNION ALL
                     SELECT 4 as click_date) a LEFT JOIN 
                     (SELECT QUARTER(date) as quarter, SUM(total_price) as revenue
                      FROM transaction
                      WHERE YEAR(date) = '${currentYear}'
                      GROUP BY QUARTER(date)) b
                      ON click_date = quarter`
    return mysql.execute((sql))
  }
}

module.exports = Transaction;
