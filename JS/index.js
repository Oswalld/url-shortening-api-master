const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () =>{
    mobileMenu.classList.toggle('menu-mobile-layout');
    menu.classList.toggle('hidden');
})