const button = document.querySelector('.page-header__toggle');
  const menu = document.querySelector('.main-nav');
        button.addEventListener('click',function() {
        if (button.classList.contains('page-header__toggle--opened')) {
            button.classList.add('page-header__toggle--closed');
            button.classList.remove('page-header__toggle--opened');
            menu.classList.add('main-nav--closed');
            menu.classList.remove('main-nav--opened');
        }
        else {
            button.classList.remove('page-header__toggle--closed');
            button.classList.add('page-header__toggle--opened');
            menu.classList.remove('main-nav--closed');
            menu.classList.add('main-nav--opened');
        }
  });
