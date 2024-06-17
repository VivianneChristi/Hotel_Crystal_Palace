

/*----------------Menu Hamburguer*/
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.menu-hamburger');
    const menuContent = document.querySelector('.menu-hamburger-content');

    hamburger.addEventListener('click', function () {
        menuContent.classList.toggle('active');
    });
});
