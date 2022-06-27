const form = document.querySelector('#contact-form');
const hamburger = document.querySelector(".hamburger__button")
const menu = document.querySelector(".menu");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('shown')
    menu.classList.toggle('show');
})