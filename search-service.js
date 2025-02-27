const express = require('express');
const app = express();
const port = 5003

app.use(express.json());

app.get("/search", (req, res) => {
    console.log("Search Service is Running..")
    return res.send("Reply from Search Service API..")
})

app.listen(port, () => {
    console.log('Search Service Server on PORT NO: ', port)
})