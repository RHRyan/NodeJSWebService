const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const recordatoriosRoutes = require('./routes/recordatorios');
const path = require('path');

const app = express();
const port = process.env.PORT || 9000;

const dbOptions = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recordatoriosdb'
};

// Middleware
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// Configura el middleware express.static para servir archivos estáticos desde la carpeta "Frontend"
const staticPath = path.join(__dirname, 'Frontend');
app.use(express.static(staticPath));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.use('/api/recordatorios', recordatoriosRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
