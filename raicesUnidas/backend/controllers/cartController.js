const db = require('../models/db');

exports.getCart = (req, res) => {
    db.all("SELECT * FROM cart", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.addToCart = (req, res) => {
    const { id, name, price, quantity } = req.body;
    const query = `
        INSERT INTO cart (id, name, price, quantity)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET quantity = quantity + excluded.quantity
    `;
    db.run(query, [id, name, price, quantity], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Producto añadido al carrito" });
    });
};

exports.removeFromCart = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM cart WHERE id = ?", [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Producto eliminado del carrito" });
    });
};

exports.clearCart = (req, res) => {
    db.run("DELETE FROM cart", [], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Carrito vaciado" });
    });
};
