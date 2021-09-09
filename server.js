const express = require("express")
const app = express()

const path = require('path');

const port = process.env.PORT || 5000;

// define routes:
app.get("/", function (req, res) {
    res.send("<h1>Hello The Team!</h1>")
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





// app.set('port', (process.env.PORT || 8081)
// app.use(express.static(path.resolve(__dirname, '../crm/build')));
