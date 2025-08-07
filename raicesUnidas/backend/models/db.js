const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Asegurar que existe la carpeta data
const dbDir = path.join(__dirname, '../data');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir);
}

const dbPath = path.join(dbDir, 'cart.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error al abrir la base de datos:', err.message);
    } else {
        console.log('✅ Conectado a SQLite en:', dbPath);
        db.run(`
            CREATE TABLE IF NOT EXISTS cart (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                quantity INTEGER NOT NULL
            )
        `);
    }
});

module.exports = db;
