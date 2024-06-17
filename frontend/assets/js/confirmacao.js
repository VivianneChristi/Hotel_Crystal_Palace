document.addEventListener('DOMContentLoaded', function () {
    // Recupera as informações do localStorage
    const nomeContratante = localStorage.getItem('nomeContratante');
    const telefoneContratante = localStorage.getItem('telefoneContratante');
    const cpfContratante = localStorage.getItem('cpfContratante');
    const quantidadeHospedes = localStorage.getItem('quantidadeHospedes');
    const nomeHotel = localStorage.getItem('nomeHotel');
    const valorTotal = localStorage.getItem('precoTotal');
    const dateRange = localStorage.getItem('dateRange');

    // Exibe as informações na página de confirmação
    document.getElementById('nome-contratante').textContent = nomeContratante || '';
    document.getElementById('telefone-contratante').textContent = telefoneContratante || '';
    document.getElementById('cpf-contratante').textContent = cpfContratante || '';
    document.getElementById('quantidade-hospedes').textContent = quantidadeHospedes || '';
    document.getElementById('nome-hotel').textContent = nomeHotel || '';
    document.getElementById('valor-total').textContent = valorTotal || '';
    document.getElementById('date-range').textContent = dateRange || '';
});



/*----------------Menu Hamburguer*/
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.menu-hamburger');
    const menuContent = document.querySelector('.menu-hamburger-content');

    hamburger.addEventListener('click', function () {
        menuContent.classList.toggle('active');
    });
});
