var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".slider-button--next",
        prevEl: ".slider-button--prev",
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