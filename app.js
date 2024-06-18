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
    res.render('hoteis');
    // Renderiza 'index.ejs' na pasta 'views'
});

app.get('/detalhes', (req, res) => {
    res.render('detalhes');
});

app.get('/index', (req, res) => {
    res.render('index');

});

app.get('/perfil', (req, res) => {
    res.render('perfil')
});

app.get('/confirmacao', (req, res) => {
    res.render('confirmacao');
});

app.get('/config', (req, res) => {

    res.render('config')

})

// Rota para lidar com o envio do formulário de reserva
app.post('/reserva', (req, res) => {
    const { nome, camas, precoTotal } = req.body;
    res.render('reserva', { quartoNome: nome, quartoCamas: camas, precoTotal });
});


// Rota para a página de confirmação
app.get('/confirmacao', (req, res) => {
    // Recupere os parâmetros da URL
    const { nome, camas, precoTotal, destino, dateRange, passengers } = req.query;

    // Renderize a página de confirmação e passe os parâmetros para a página
    res.render('confirmacao', { nome, camas, precoTotal, destino, dateRange, passengers });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/views/login.html'));
});

app.get('/reserva', (req, res) => {
    const quartoNome = req.query.quartoNome;
    const quartoCamas = req.query.quartoCamas;
    const precoTotal = req.query.precoTotal;

    // Renderiza o template EJS com os dados do quarto
    res.render('reserva', { quartoNome, quartoCamas, precoTotal });
});


app.listen(port, '192.168.15.17', () => {
    console.log(`Servidor no ar http://192.168.15.17:${port}`);
});
