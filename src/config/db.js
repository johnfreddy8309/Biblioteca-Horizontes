// src/config/db.js
const mysql = require('mysql');


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'db_horizontes',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        console.log('La aplicación no se pudo levantar.');
        return;
    }
    console.info('Conectado a la base de datos MySQL.');
});

module.exports = db;