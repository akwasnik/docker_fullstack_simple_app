const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();

app.use(cors())

const port = 3000;

const db = new Client({
    host: 'db', 
    user: 'user',
    password: 'pass',
    database: 'mydb',
    port: 5432,  
    connectionTimeoutMillis: 10000
});

db.connect(err => {
    if (err) {
        console.error('Błąd połączenia z bazą:', err);
    } else {
        console.log('Połączono z bazą danych');
    }
});

app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW() as now');
        res.send(`Połączenie z bazą działa! Aktualny czas: ${result.rows[0].now}`);
    } catch (err) {
        res.status(500).send('Błąd połączenia z bazą');
    }
});

app.get('/time', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW() as now');
        res.json({ message: result.rows[0].now});
    } catch (err) {
        res.status(500).send('Błąd połączenia z bazą');
    }
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});