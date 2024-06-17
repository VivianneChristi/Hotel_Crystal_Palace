var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

/*---------------------------------- Sistema de Reserva ----------------------------*/
// Atualiza as informações com os dados recebidos
document.addEventListener('DOMContentLoaded', function () {
    const quartoNome = localStorage.getItem('quartoNome');
    const quartoCamas = localStorage.getItem('quartoCamas');
    const precoTotal = localStorage.getItem('precoTotal');
    const nomeHotel = localStorage.getItem('nomeHotel');
    const dateRange = localStorage.getItem('dateRange');
    const quantidadeHospedes = localStorage.getItem('quantidadeHospedes');

    document.getElementById('quarto-info').textContent = quartoNome;
    document.getElementById('camas-info').textContent = quartoCamas;
    document.getElementById('preco-info').textContent = precoTotal;
    document.getElementById('nome-hotel').textContent = nomeHotel;
    document.getElementById('date-range').textContent = dateRange;
    document.getElementById('quantidade-hospedes').textContent = quantidadeHospedes;

    // Código para envio das informações do contratante
    document.querySelector('form').addEventListener('submit', function (event) {
        const nomeContratante = document.getElementById('name').value;
        const telefoneContratante = document.getElementById('phone').value;
        const cpfContratante = document.getElementById('cpf').value;

        localStorage.setItem('nomeContratante', nomeContratante);
        localStorage.setItem('telefoneContratante', telefoneContratante);
        localStorage.setItem('cpfContratante', cpfContratante);
    });
});


function reservarQuarto(nome, camas, precoTotal) {
    // Obtenha as informações da reserva
    const destino = localStorage.getItem('destino');
    const dateRange = localStorage.getItem('dateRange');
    const passengers = localStorage.getItem('passengers');

    localStorage.setItem('quartoNome', nome);
    localStorage.setItem('quartoCamas', camas);
    localStorage.setItem('precoTotal', precoTotal);
    localStorage.setItem('nomeHotel', destino);
    localStorage.setItem('dateRange', dateRange);
    localStorage.setItem('quantidadeHospedes', passengers);

    // Armazene as informações da reserva na URL ao redirecionar para a página de confirmação
    window.location.href = `/confirmacao?nome=${nome}&camas=${camas}&precoTotal=${precoTotal}&destino=${destino}&dateRange=${dateRange}&passengers=${passengers}`;
}


document.addEventListener('DOMContentLoaded', function () {
    // Event listener para o envio do formulário de reserva
    document.getElementById('reserva-form').addEventListener('submit', function (event) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Armazena as informações do contratante no localStorage
        localStorage.setItem('nomeContratante', document.getElementById('name').value);
        localStorage.setItem('telefoneContratante', document.getElementById('phone').value);
        localStorage.setItem('cpfContratante', document.getElementById('cpf').value);

        // Redireciona para a página de confirmação
        window.location.href = '/confirmacao';
    });
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



/*----------------Menu Hamburguer*/
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.menu-hamburger');
    const menuContent = document.querySelector('.menu-hamburger-content');

    hamburger.addEventListener('click', function () {
        menuContent.classList.toggle('active');
    });
});
