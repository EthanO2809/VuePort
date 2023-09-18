require ("dotenv").config();

const {createPool} = require("mysql2");

let connection = createPool({
    host: process.env.dbhost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30,
});

module.exports = {
    connection
}