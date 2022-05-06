// klik di luar hamburger
// hamburger
const hamburger = document.querySelector('#hamburger');
const fixedNav = document.querySelector('#navbar');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    fixedNav.classList.toggle('hidden');
})

window.addEventListener('click', function (e) {
    if (e.target != hamburger & e.target != fixedNav) {
        hamburger.classList.remove('hamburger-active');
        fixedNav.classList.add('hidden');
    }
})