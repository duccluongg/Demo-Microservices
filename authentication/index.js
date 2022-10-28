const express = require('express')
const dbconnection = require("./src/config/dbconnection");
const cors = require('cors');

dbconnection();

const app = express()

app.use(express.json())

app.use(cors());

const authRoute = require('./src/routes/auth.route');

app.use('/auth', authRoute);


app.listen(8001, () => {
    console.log('Customer is Listening to Port 8001')
})