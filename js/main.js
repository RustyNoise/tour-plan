$(document).ready(function() {
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
        effect: "slide",
    });

    var menuButton = $(".menu-button");
    menuButton.on("click", function() {
        $(".menu-button").toggleClass("button-animation");
        $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    });

    var openModalButton = $("[data-toggle=modal]");
    openModalButton.on("click", openModal);
    var closemodalButton = $("[data-toggle=modal-close]");
    closemodalButton.on("click", closeModal);

    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            event.preventDefault();
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            //$("body").removeClass('body--noscroll');
        }
    });

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        //$("body").addClass('body--noscroll');
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        $("body").removeClass("body--noscroll");
    }
    // Form validation
    $(".modal__form").validate({
        errorClass: "invalid",
        rules: {
            name: {
                required: true,
                isName: true,
            },
            phone: {
                required: true,
                isPhone: true,
            },
            emailModal: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: "We need your name to contact you",
                minlength: "At least 2 letters required",
                isName: "Your name is invalid",
            },
            emailModal: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            phone: {
                required: "We need your phone number to contact you",
                isPhone: "Only digits allowed",
            },
        },
    });
    $(".newsletter-wrapper__subscribe").validate({
        errorClass: "invalid",
        //errorPlacement: function(error, element) {
        //    error.appendTo(element.parent("form").parent("div"));
        //},
        rules: {
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                email: "Required format: name@domain.com",
            },
        },
    });
    $(".footer__form").validate({
        errorClass: "invalid",
        rules: {
            nameFooter: {
                required: true,
                isName: true,
            },
            phoneFooter: {
                required: true,
                isPhone: true,
            },
        },
        messages: {
            nameFooter: {
                required: "We need your name to contact you",
                minlength: "At least 2 letters required",
                isName: "Your name is invalid",
            },
            phoneFooter: {
                required: "We need your phone to contact you",
                isPhone: "Only digits allowed",
            },
        },
    });
    AOS.init();
});