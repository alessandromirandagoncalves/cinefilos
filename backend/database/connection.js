const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'teste',
    password: 'teste',
    database: 'cinefilo'
})

module.exports = Connection;
