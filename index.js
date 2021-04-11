const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav--links')
const links = document.querySelectorAll('.links li')


hamburger.addEventListener('click', () => {
    console.log('test')
    navLinks.classList.toggle('open')
})