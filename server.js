const express = require('express');

const app = express();
const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send('Witaj w aplikacji Express!');
});

app.get('/contact', (req, res) => {
    res.send('Strona kontaktowa');
});

app.get('/api/info', (req, res) => {
    res.json({
        application: 'Express LAB4',
        version: '1.0'
    });
});

app.get('/api/users/search', (req, res) => {
    const { name, page = 1 } = req.query;

    res.json({ name, page });
});

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: 'Pobrano użytkownika',
        id: id
    });
});

app.use(express.json());

app.delete('/api/users', (req, res) => {
    const user = req.body;

    res.status(404).json(user);
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});

