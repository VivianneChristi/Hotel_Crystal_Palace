var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

const botao_login = document.getElementById('login-btn');
const botao_register = document.getElementById('register-btn');

botao_register.addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.querySelector('#register-form input[name="name"]');
    const email = document.querySelector('#register-form input[name="email"]');
    const senha = document.querySelector('#register-form input[name="pswd"]');

    const info = {
        nome: name.value,
        email: email.value,
        senha: senha.value
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(info),
        headers: myHeaders
    };

    fetch('http://localhost:5000/api/users', fetchData)
        .then((response) => response.json())
        .then((dados) => {
            console.log('Dados recebidos:', dados);
            if (dados.error) {
                alert(dados.error);
            }
            if (dados.logado === true) {
                window.location.href = "http://127.0.0.1:5000/";
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});

botao_login.addEventListener('click', function (event) {
    event.preventDefault();
    const email = document.querySelector('#login-form input[name="email"]');
    const senha = document.querySelector('#login-form input[name="pswd"]');

    const info = {
        email: email.value,
        senha: senha.value
    };

    console.log('Informações de login:', info);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(info),
        headers: myHeaders
    };

    fetch('http://localhost:5000/api/users/login', fetchData)
        .then((response) => {
            console.log('Resposta bruta:', response);
            return response.json();
        })
        .then((dados) => {
            console.log('Dados recebidos:', dados);
            if (dados.error) {
                alert(dados.error);
            }
            if (dados.logado === true) {
                window.location.href = "http://127.0.0.1:5000/";
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
        });
});
