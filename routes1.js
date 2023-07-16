const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM recordatorios', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

router.post('/', (req, res) => {
  const { fecha, nombre, descripcion, categoria } = req.body;
  const query = 'INSERT INTO recordatorios (Fecha, Nombre, Descripcion, Categoria) VALUES (?, ?, ?, ?)';
  db.query(query, [fecha, nombre, descripcion, categoria], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Recordatorio agregado correctamente' });
    }
  });
});

router.put('/:id', (req, res) => {
  const { fecha, nombre, descripcion, categoria } = req.body;
  const query = 'UPDATE recordatorios SET Fecha = ?, Nombre = ?, Descripcion = ?, Categoria = ? WHERE Id = ?';
  db.query(query, [fecha, nombre, descripcion, categoria, req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'No se encontró el recordatorio' });
    } else {
      res.json({ message: 'Recordatorio actualizado correctamente' });
    }
  });
});

router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM recordatorios WHERE Id = ?';
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'No se encontró el recordatorio' });
    } else {
      res.json({ message: 'Recordatorio eliminado correctamente' });
    }
  });
});

module.exports = router;
