const express = require('express');
const app = express();
const port = 5001

app.use(express.json());

app.post("/registration", (req, res) => {
    console.log("Registration Service is Running..")
    return res.send("Reply from Registration Service API..")
})

app.listen(port, () => {
    console.log('Registration Service Server on PORT NO: ', port)
})