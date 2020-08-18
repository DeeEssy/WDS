var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        950: {
            slidesPerView: 5,
        },
        885: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 2,
        },
    },
})