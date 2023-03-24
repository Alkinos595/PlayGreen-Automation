require('dotenv').config();
const mysql = require('mysql2/promise');

async function connect() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST_QA,
            user: process.env.DB_USER_QA,
            password: process.env.DB_PASSWORD_QA,
            database: process.env.DB_DATABASE_QA,
        });
        console.log('Conexión exitosa a la base de datos MySQL');

        return connection;
    } catch (error) {
        console.error('Error de conexión a la DB: ', error);
        throw error;
    }
}

module.exports = connect;
