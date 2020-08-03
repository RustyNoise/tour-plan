$(document).ready(function () {
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
  menuButton.on("click", function () {
    $(".menu-button").toggleClass("button-animation");
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("body").toggleClass("body--noscroll");
  });

  var openModalButton = $("[data-toggle=modal]");
  openModalButton.on("click", openModal);
  var closemodalButton = $("[data-toggle=modal-close]");
  closemodalButton.on("click", closeModal);

  $(document).keyup(function (e) {
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
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 symbols required.",
        },
        phone: {
          required: "Phone number is required",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
  $(".phone__mask").mask("+7 (000) 000-00-00");
});
