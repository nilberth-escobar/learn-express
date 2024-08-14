const mysql = require('mysql2');

const db = mysql.createConnection({ 
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Machineguny2k87',
    database: 'cursos'
});

db.connect((err) => {
    if(err) {
        throw err;
    }  
        console.log('Conectado a la base de datos');
    
});

module.exports = db;