const toggle = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.nav-link');
toggle.addEventListener('click', () =>{
    navLink.classList.toggle('active');
    toggle.classList.toggle('open');
})