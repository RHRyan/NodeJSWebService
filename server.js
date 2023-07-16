const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const recordatoriosRoutes = require('./recordatorios'); // Importa el nuevo archivo de rutas
const app = express();
app.set('port', process.env.PORT || 9000);
const dbOptions = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'recordatoriosdb'
};

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// routes -------------------------------------------
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});
app.use('/api', routes);
app.use('/api/recordatorios', recordatoriosRoutes); // Usa el nuevo archivo de rutas para los recordatorios

// server running -----------------------------------
app.listen(app.get('port'), () => {
  console.log('server running on port', app.get('port'));
});
