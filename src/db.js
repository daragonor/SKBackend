var mysql = require('mysql');

// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smartkitchen',
    database: 'smart_kitchen'
});

module.exports = dbConn;