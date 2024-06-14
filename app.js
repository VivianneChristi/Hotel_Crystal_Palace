const express = require('express');
const path = require('path');

const port = 5000;
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(express.static('public'));

const router = require('./backend/src/routes/router');

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index'); // Renderiza 'index.ejs' na pasta 'views'
});

// Configurar EJS como a engine de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));

// Configurar diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend/assets')));

// Usar o roteador principal para APIs
app.use("/api", router);

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index'); // Renderiza 'index.ejs' na pasta 'views'
});

app.get('/detalhes', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/detalhes.html'));
});

app.get('/hoteis', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/hoteis.html'));

});

app.get('/confirmacao', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/confirmacao.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/login.html'));
});

app.get('/reserva', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/reserva.html'));
});

app.get('/confirmacao', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/confirmacao.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/login.html'));
});

app.get('/reserva', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/reserva.html'));
});




app.listen(port, () => {
    console.log(`Servidor no ar http://localhost:${port}`);
});
