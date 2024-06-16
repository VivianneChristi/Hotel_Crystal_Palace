const express = require('express');
const path = require('path');

const port = 5000;
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(express.static('public'));

const router = require('./backend/src/routes/router');

// Configurar EJS como a engine de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend/views'));

// Configurar diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend/assets')));


app.use(express.json());

/*const cors = require("cors");
app.use(cors());*/

// Usar o roteador principal para APIs
app.use("/api", router);

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index'); // Renderiza 'index.ejs' na pasta 'views'
});

app.get('/detalhes', (req, res) => {
    res.render('detalhes');
});

app.get('/hoteis', (req, res) => {
    res.render('hoteis');

});

app.get('/confirmacao', (req, res) => {
    res.render('confirmacao');
});

app.get('/config', (req, res) => {

    res.render('config')

});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/login.html'));
});

app.get('/reserva', (req, res) => {
    res.render('reserva');
});


app.listen(port, () => {
    console.log(`Servidor no ar http://localhost:${port}`);
});
