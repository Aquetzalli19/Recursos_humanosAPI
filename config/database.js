const mysql = require('mysql');
const util = require('util');
import { DB_DATABASE,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
} from "../src/config.js";


const pool = mysql.createPool({
    connectionLimit:10,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

pool.query = util.promisify(pool.query);
module.exports = pool;