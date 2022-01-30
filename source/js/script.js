const button = document.querySelector('.page-header__toggle');
const menu = document.querySelector('.main-nav');

const closeMenu = () => {
    button.classList.add('page-header__toggle--closed');
    button.classList.remove('page-header__toggle--opened');
    menu.classList.add('main-nav--closed');
    menu.classList.remove('main-nav--opened');
}

const openMenu = () => {
    button.classList.remove('page-header__toggle--closed');
    button.classList.add('page-header__toggle--opened');
    menu.classList.remove('main-nav--closed');
    menu.classList.add('main-nav--opened');
}

if (button.classList.contains('page-header__toggle--opened')) {
    closeMenu();
}

button.addEventListener('click',function() {
    if (button.classList.contains('page-header__toggle--opened')) {
        closeMenu();
    } else {
        openMenu();
    }
});
