const burgerButton = document.querySelector('#burger-button')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.c-header__list-item')

const menuToggle = () => {
    menu.classList.toggle('c-header__nav--active')
}

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('c-header__nav--active')
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `fade .5s ease forwards ${index / 7 + .3}s`
        }
    })
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('c-header__nav--active')
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `fade .5s ease forwards ${index / 7 + .3}s`
            }
        })
    })
})

