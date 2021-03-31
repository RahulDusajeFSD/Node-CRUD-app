const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended:true }))

app.use(bodyParser.json())


const studentRoutes = require('./src/route')

app.use('/api/v1/students', studentRoutes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})