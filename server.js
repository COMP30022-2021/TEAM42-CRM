const express = require("express");
const path = require('path');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port for backend running
const port = process.env.PORT || 5000;

// define routes
app.use("/contact", require("./routes/contactRoutes"));

app.use("/customer", require("./routes/customerRoutes"));

app.use("/auth", require("./routes/authenticationRoutes"));

app.use("/business", require("./routes/businessRoutes"));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('crm/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "crm", "build", "index.html"));
    });
}

// start the server listening for requests
// app.listen(port, (err) => {
//     if (err) return console.log(err);
//     console.log("Server is running on port: ", port)
// });

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
    next();
})

app.listen(port, function () {
    console.log('CORS-enabled web server listening on port', port)
})

