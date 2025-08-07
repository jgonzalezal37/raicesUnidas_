// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./models/db.js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GET - Obtener todos los elementos del carrito
app.get('/cart', (req, res) => {
    db.all('SELECT * FROM cart', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// POST - Añadir un nuevo producto al carrito
app.post('/cart', (req, res) => {
    const { id, name, price, quantity } = req.body;
    const sql = 'INSERT INTO cart (id, name, price, quantity) VALUES (?, ?, ?, ?)';
    db.run(sql, [id, name, price, quantity], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Item añadido', itemId: this.lastID });
    });
});

// DELETE - Eliminar un producto específico
app.delete('/cart/:id', (req, res) => {
    const itemId = req.params.id;
    db.run('DELETE FROM cart WHERE id = ?', [itemId], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Item eliminado' });
    });
});

// DELETE - Vaciar el carrito por completo
app.delete('/cart', (req, res) => {
    db.run('DELETE FROM cart', function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Carrito vaciado' });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
