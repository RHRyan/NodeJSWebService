const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { uname, pass } = req.body;
  const query = 'SELECT * FROM usuarios WHERE user = ?';
  db.query(query, [uname], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      const user = rows[0];
      if (user.contrasena === pass) {
        res.json({ message: 'Inicio de sesión exitoso' });
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    }
  });
});

module.exports = router;
