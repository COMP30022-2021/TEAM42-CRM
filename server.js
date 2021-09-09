const express = require("express");
const path = require('path');
const mysql = require('mysql');

const app = express()

// port for backend running
const port = process.env.PORT || 5000;

// connection for mysql
const connection = mysql.createConnection({
    host:'us-cdbr-east-04.cleardb.com',
    user:'b01eb9170bdd13',
    password:'fd7ba9ac',
    database:'heroku_c2fca39d7a7384f',
})

// define routes:
app.get("/mysql", function (req, res) {
    // test connection
    connection.query('SELECT * FROM customer WHERE id = "1"', (err, rows) => {
        if (!err) {
            console.log(rows)
            res.send(rows)
        }
    })
})


if (process.env.NODE_ENV == 'production') {
    app.use(express.static('crm/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "crm", "build", "index.html"));
    });
}

// start the server listening for requests
app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log("Server is running on port: ", port)
});

module.exports = connection
