const express = require("express")
const app = express()

// define routes:
app.get("/", function (req, res) {
    res.send("<h1>Hello The Team!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 8888,
    () => console.log("Server is running..."));