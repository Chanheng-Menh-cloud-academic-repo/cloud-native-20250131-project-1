const express = require('express');
const app = express();
const port = 5004

app.use(express.json());

app.put("/profileupdate", (req, res) => {
    console.log("Update Service is Running..")
    return res.send("Reply from Update Service API..")
})

app.listen(port, () => {
    console.log('Update Service Server on PORT NO: ', port)
})