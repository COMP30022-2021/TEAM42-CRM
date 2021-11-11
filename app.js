const express = require("express");
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const connectRedis = require('connect-redis');
const session = require('express-session');
const RedisStore = connectRedis(session);

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.enable("trust proxy");
const redisClient = require("./config/redis");

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: process.env.SESSION_SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 1000 * 60 * 10
    }
}))

// define routes
app.use("/contact", require("./routes/contactRoutes"));
app.use("/vendor", require("./routes/vendorRoutes"));
app.use("/customer", require("./routes/customerRoutes"));
app.use("/auth", require("./routes/authenticationRoutes"));
app.use("/business", require("./routes/businessRoutes"));
app.use("/product", require("./routes/productRoutes"));
app.use("/order", require("./routes/orderDetailRoutes"));
app.use("/transaction", require("./routes/transactionRoutes"));
app.use("/engagement", require("./routes/engagementRoutes"));

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

module.exports = app
