const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('SELECT * FROM recordatorios', (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

router.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('INSERT INTO recordatorios SET ?', [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send('Recordatorio añadido');
    });
  });
});

router.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('DELETE FROM recordatorios WHERE Id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err);

      res.send('Recordatorio eliminado');
    });
  });
});

router.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query('UPDATE recordatorios SET ? WHERE Id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err);

      res.send('Recordatorio modificado');
    });
  });
});

module.exports = router;
