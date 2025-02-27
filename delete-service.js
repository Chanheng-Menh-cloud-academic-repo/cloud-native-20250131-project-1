const express = require('express');
const app = express();
const port = 5005

app.use(express.json());

app.delete("/rm", (req, res) => {
    console.log("Delete Service is Running..")
    return res.send("Reply from Delete Service API..")
})

app.listen(port, () => {
    console.log('Delete Service Server on PORT NO: ', port)
})