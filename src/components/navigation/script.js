document.addEventListener('click', function (evt) {
    if (evt.target && evt.target.closest('.navigation__burger-button')) {
        let target = evt.target.closest('.navigation__burger-button');
        let navigationList = document.querySelector('.navigation__list');
        target.classList.toggle('active');

        if (target.classList.contains('active')) {
            navigationList.classList.add('active');
        } else {
            navigationList.classList.remove('active');
        }
    }

    if (evt.target && evt.target.closest('.navigation__link')) {
        let navigationList = document.querySelector('.navigation__list');
        let menuOpen = document.querySelector('.navigation__burger-button');
        navigationList.classList.remove('active');
        menuOpen.classList.remove('active');
    }
})