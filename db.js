const mysql = require('mysql');

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recordatoriosdb'
};

const connection = mysql.createPool(dbOptions);

module.exports = connection;

