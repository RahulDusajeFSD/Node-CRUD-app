const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
})

connection.connect(function(err)
{
    if (err) throw err;

    console.log('Database connected')


})

module.exports = connection