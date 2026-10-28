
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


const logger = (req, res, next) => {
    console.log(
        `${new Date().toISOString()} ${req.method} ${req.url}`
    );

    next();
};

app.use(logger);


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


app.get('/api/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'Jan' },
            { id: 2, name: 'Anna' }
        ]
    });
});


app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    res.json({
        message: 'Pobrano użytkownika',
        id: id
    });
});


app.post('/api/users', (req, res) => {
    const user = req.body;

    res.status(201).json(user);
});

app.delete('/api/users/:id', (req, res) => {
    res.status(200).json({
        message: 'Odebrano żądanie usunięcia użytkownika',
        id: req.params.id
    });
});


app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});
