const express = require("express");
const path = require('path');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// port for backend running
const port = process.env.PORT || 5000;

// define routes
app.use("/customer", require("./routes/customerRoutes"));


if (process.env.NODE_ENV === 'production') {
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