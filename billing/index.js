const express = require('express')
const dbconnection = require("./src/config/dbconnection");
const cors = require('cors');
require('./src/rabitmq/comsumer.js');
dbconnection();
const app = express()
app.use(cors());
app.use(express.json())

const billingRoute = require('./src/routes/billing.route')

app.use('/billing',billingRoute)

app.listen(8004, () => {
    console.log('Cart is Listening to Port 8004')
})