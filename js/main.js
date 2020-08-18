let mNav = $('.header-wrapper')
let mMenuBtn = $('.m-menu')
mMenuBtn.on('click', function () {
    mNav.toggleClass('active')
    if (mNav.hasClass('active')) {
        $('.m-menu__img').attr('src', 'img/m-menu-close.svg')
    } else
        $('.m-menu__img').attr('src', 'img/m-menu.svg')
})