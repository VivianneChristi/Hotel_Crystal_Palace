
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

// Seleciona os elementos de entrada para email e senha

// Seleciona o botão de login pelo ID
const botao = document.getElementById('login');

const butao = document.getElementById('register');


// Array para armazenar os dados
const data = [];


butao.addEventListener('click', function (event) {

    console.log("dsasdasda");

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
                window.location.href = "http://localhost:5500/frontend/views/hoteis";
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
    //   console.log(response.json().then(dados => console.log(dados)).catch(erro => console.log(erro)))
});

