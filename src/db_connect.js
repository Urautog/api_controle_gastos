const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123Mrgeek456!',
  database: 'muralis',
});

connection.connect((error) => {
  if (error) {
    console.error(`Error connecting: ${error.stack}`);
    return;
  }

  console.log('Conectado ao DB');
});

module.exports = connection;
