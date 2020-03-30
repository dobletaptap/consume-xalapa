const burgerButton = document.querySelector('#burger-button')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.c-header__list-item')

const menuToggle = () => {
    menu.classList.toggle('c-header__nav--active')
}

burgerButton.addEventListener('click', menuToggle)

links.forEach(link => {
    link.addEventListener('click', menuToggle)
})

