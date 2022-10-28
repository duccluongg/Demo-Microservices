const express = require('express')
const dbconnection = require("./src/config/dbconnection");
const cors = require('cors');
dbconnection();
const app = express()
app.use(cors());
app.use(express.json())

const cart = require('./src/routes/cart.route')

app.use('/cart',cart)

app.listen(8003, () => {
    console.log('Cart is Listening to Port 8003')
})