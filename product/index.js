const express = require('express')
const dbconnection = require("./src/config/dbconnection");
const cors = require('cors');


dbconnection();

const app = express()

app.use(express.json())

app.use(cors());

const productRoute = require('./src/routes/product.route');

app.use('/product',productRoute)

app.listen(8002, () => {
    console.log('Customer is Listening to Port 8002')
})