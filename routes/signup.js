const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { nombre, user, contrasena } = req.body;
  const query = 'INSERT INTO usuarios (nombre, user, contrasena) VALUES (?, ?, ?)';
  db.query(query, [nombre, user, contrasena], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Usuario registrado correctamente' });
    }
  });
});

module.exports = router;
