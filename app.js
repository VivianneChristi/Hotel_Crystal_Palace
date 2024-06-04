const express = require('express');

// Constante do nº da porta 
const port = 8080;

// Instanciando o express dentro da constante app
const app = express();

// Colocando o caminho para requisição das rotas 
const router = require('./')

// Colocando os usos do app

// Usar json
app.use(express.json());

// Deixar alguns arquivos públicos 
app.use(express.static(""));

// Adicionar / as rotas
app.use("/", router);


// Solicitando que a constante app escute as requisições na porta 3001 e escreva no console caso funcione corretamente
app.listen(port, () => {
    console.log(`Servidor no ar http://localhost:${port}`)});