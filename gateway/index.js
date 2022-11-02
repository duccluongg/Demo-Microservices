const express = require('express')
const cors = require('cors')
// Routing request to services
const proxy = require('express-http-proxy')
const app = express()

app.use(cors());
app.use(express.json())

app.use('/billing', proxy('http://localhost:8004'))
app.use('/order', proxy('http://localhost:8003'))


app.listen(8000, () => {
    console.log('ApiGateway is Listening to Port 8000')
})