const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit:10,
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'human_resources'
});

pool.query = util.promisify(pool.query);
module.exports = pool;