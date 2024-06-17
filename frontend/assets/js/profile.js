var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

const delet = document.getElementById('deletando');

delet.addEventListener('click', function (event) {


  event.preventDefault();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let fetchData = {
    method: 'DELETE',
    body: JSON.stringify(info),
    headers: myHeaders
  }

  fetch('http://localhost:5000/api/users/', fetchData)
    .then((response) => response.json())
    .then((dados) => {
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



})



/*----------------Menu Hamburguer*/
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.menu-hamburger');
  const menuContent = document.querySelector('.menu-hamburger-content');

  hamburger.addEventListener('click', function () {
    menuContent.classList.toggle('active');
  });
});
