const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navmenu-hamburger-active');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-animation');
    navMenu.classList.toggle('hidden');
});