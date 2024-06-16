var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

/*---------------------------------- Sistema de Reserva ----------------------------*/
 // Atualiza as informações com os dados recebidos
 document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados do localStorage
    const quartoNome = localStorage.getItem('quartoNome');
    const quartoCamas = localStorage.getItem('quartoCamas');
    const precoTotal = localStorage.getItem('precoTotal');

    // Exibe os dados na página
    document.getElementById('quarto-info').innerText = `Quarto: ${quartoNome}`;
    document.getElementById('camas-info').innerText = `Camas: ${quartoCamas}`;
    document.getElementById('preco-info').innerText = `Valor Total: R$ ${precoTotal}`;

});
    // Seleciona os elementos de entrada para email e senha

// Seleciona o botão de login pelo ID
const confirmar = document.getElementById('confirmar');

// Array para armazenar os dados
const data = [];


confirmar.addEventListener('click', function (event) {

    console.log("dsasdasda");

    event.preventDefault();

    const info = {
        phone: phone.value,
        cpf: cpf.value
    };

    data.push(info);

    console.log(data);

    confirmar.removeEventListener('click', confirmar)
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


    console.log(info)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(info),
        headers: myHeaders
    }


    fetch('http://localhost:5000/api/users/login', fetchData)
        .then((response) => response.json())
        .then((dados) => {
            if (dados.error) {
                alert(dados.error);
            }

            if (dados.logado === true) {
                window.location.href = "http://127.0.0.1:5500/frontend/views/hoteis.html";
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    //   console.log(response.json().then(dados => console.log(dados)).catch(erro => console.log(erro)))
});

