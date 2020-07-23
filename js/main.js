var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".hotel-slider__button--next",
        prevEl: ".hotel-slider__button--prev",
    },
    speed: 450,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
    },
    speed: 450,
    autoplay: {
        delay: 6000,
    },
    effect: 'slide',
});