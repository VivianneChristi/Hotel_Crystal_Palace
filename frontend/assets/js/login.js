// Seleciona os elementos de entrada para email e senha



// Seleciona o botão de login pelo ID
const botao = document.getElementById('login');

const butao = document.getElementById('register');




// Array para armazenar os dados
const data = [];


butao.addEventListener('click', function (event) {

    event.preventDefault();

    const email = document.getElementsByClassName('input')[2];
    const senha = document.getElementsByClassName('input')[3];

    const info = {
        email: email.value,
        senha: senha.value
    };

    data.push(info);

    console.log(data);

    butao.removeEventListener('click', butao)
});



// Adiciona um evento de clique ao botão de login
botao.addEventListener('click', function (event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    const email = document.getElementsByClassName('input')[0];
    const senha = document.getElementsByClassName('input')[1];

    // Coleta as informações de email e senha
    const info = {
        email: email.value,
        senha: senha.value
    };

    // Adiciona as informações ao array de dados
    data.push(info);

    // Exibe os dados no console
    console.log(data);
});


