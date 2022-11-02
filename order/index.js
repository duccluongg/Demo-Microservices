const express = require('express')
const dbconnection = require("./src/config/dbconnection");
const cors = require('cors');


dbconnection();

const app = express()

app.use(express.json())

app.use(cors());

const orderRoute = require('./src/routes/order.route');

app.use('/order',orderRoute)

app.listen(8003, () => {
    console.log('Customer is Listening to Port 8003')
})