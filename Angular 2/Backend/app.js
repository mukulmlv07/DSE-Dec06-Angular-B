const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser());
app.use(cors());
// app.use('/', (req, res) => {
//     res.status(200).json({"message":"Data Recieved"})

// })
app.post('/enroll', (req, res) => {
    console.log(req.body);
    res.status(200).json({"message":"Data Recieved"})
})

app.listen(3000, () => {
    console.log(`app running on 3000`)
})