$(document).ready(function () {
    $(".centers__slider-big").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".centers__slider-tape",
    });
    $(".centers__slider-tape").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".centers__slider-big",
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 3,
                    variableWidth: true,
                },
            },
        ],
    });
    $(".activity__slider").slick({
        slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,
                },
            },
        ],
    });
    $(".specialists__slider").slick({
        slidesToShow: 2,
        variableWidth: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                    arrows: false,
                    swipeToSlide: true,
                },
            },
        ],
    });
    $(".certificates__slider").each(function () {
        let main = $(this).find(".certificates__slider-main");
        let tape = $(this).find(".certificates__slider-tape");
        main.slick({
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            asNavFor: tape,
            responsive: [
                {
                    breakpoint: 541,
                    settings: {
                        variableWidth: false,
                    },
                },
            ],
        });
        tape.slick({
            slidesToShow: 4,
            verticalSwiping: true,
            slidesToScroll: 1,
            arrows: true,
            vertical: true,
            focusOnSelect: true,
            dots: false,
            asNavFor: main,
        });
    });

    function burgerMenu() {
        const burger = $(".burger__menu");
        const overlay = $(".overlay");
        const links = $(".header__menu-item--link");
        burger.click(function (event) {
            $(this).toggleClass("active");
            $(".header__burger").toggleClass("active");
            $(".overlay").toggleClass("active");
            preventScroll();
        });
        overlay.click(function (event) {
            $(this).toggleClass("active");
            $(".header__burger").toggleClass("active");
            burger.toggleClass("active");
            preventScroll();
        });
        links.click(function (event) {
            $(".header__burger").removeClass("active");
            $(".overlay").removeClass("active");
            burger.removeClass("active");
            preventScroll();
        });
        function preventScroll() {
            if ($(".header__burger").hasClass("active")) {
                $("body").css("overflow", "hidden");
            } else {
                $("body").css("overflow", "visible");
            }
        }
    }

    burgerMenu();

    $(".answers__spoiler-title").click(function (event) {
        $(this).toggleClass("active").next().slideToggle();
    });
    $(".services__card-title").click(function (event) {
        if ($(document).width() <= 991) {
            $(this).toggleClass("active").next().slideToggle();
        }
    });

    function preventJQcss() {
        let w = $(window).outerWidth();
        if (w >= 991) {
            $(".services__card-inner").removeAttr("style");
        }
    }

    function adaptive_groups() {
        let w = $(window).outerWidth();
        if (w <= 1024) {
            if (!$(".groups-title.title").hasClass("done")) {
                $(".groups-title.title").addClass("done").prependTo($(".groups .container"));
            }
            if (!$(".groups-def-btn").hasClass("done")) {
                $(".groups-def-btn").addClass("done").prependTo($(".groups__content"));
            }
        } else {
            if ($(".groups-title.title").hasClass("done")) {
                $(".groups-title.title").removeClass("done").prependTo($(".groups__content-text"));
            }
            if ($(".groups-def-btn").hasClass("done")) {
                $(".groups-def-btn").removeClass("done").appendTo($(".groups__slider-block"));
            }
        }
    }

    function adaptive_staff() {
        let w = $(window).outerWidth();
        if (w <= 1440) {
            if (!$(".staff__slider").hasClass("done")) {
                $(".staff__slider").addClass("done").insertAfter($(".staff-text"));
            }
            if (!$(".staff .play").hasClass("done")) {
                $(".staff .play").addClass("done").appendTo($(".staff-slogan"));
            }
            if (!$(".staff__slider-play").hasClass("done")) {
                $(".staff__slider-play").addClass("done").appendTo($(".staff-slogan"));
            }
        } else {
            if ($(".staff__slider").hasClass("done")) {
                $(".staff__slider").removeClass("done").insertAfter($(".staff-container"));
            }
            if ($(".staff__slider-play").hasClass("done")) {
                $(".staff__slider-play").removeClass("done").prependTo($(".staff__slider"));
            }
            if ($(".staff .play").hasClass("done")) {
                $(".staff .play").removeClass("done").prependTo($(".staff__slider"));
            }
        }
    }

    function adaptive_nav() {
        let w = $(window).outerWidth();
        if (w <= 768) {
            if (!$(".header__nav").hasClass("done")) {
                $(".header__nav").addClass("done").appendTo($(".header__burger"));
            }
        } else {
            if ($(".header__nav").hasClass("done")) {
                $(".header__nav").removeClass("done").prependTo($(".header__menu-container"));
            }
        }
    }

    function adaptive_header() {
        let w = $(window).outerWidth();
        if (w <= 768) {
            if (!$(".header-city__block").hasClass("done")) {
                $(".header-city__block").addClass("done").appendTo($(".header__menu-container"));
            }

            if (!$(".header-phone__block").hasClass("done")) {
                $(".header-phone__block").addClass("done").appendTo($(".header__menu-container"));
            }
        } else {
            if ($(".header-city__block").hasClass("done")) {
                $(".header-city__block").removeClass("done").appendTo($(".header__info-container"));
            }

            if ($(".header-phone__block").hasClass("done")) {
                $(".header-phone__block")
                    .removeClass("done")
                    .appendTo($(".header__info-container"));
            }
        }

        if (w <= 666) {
            if (!$(".header-city__block").hasClass("m")) {
                $(".header-city__block").addClass("m").prependTo($(".header__main-container"));
            }

            if (!$(".header__burger").hasClass("done")) {
                $(".header__burger").addClass("done").appendTo($(".header__menu-container"));
            }
        } else {
            if ($(".header-city__block").hasClass("m")) {
                $(".header-city__block").removeClass("m").insertBefore($(".header-phone__block"));
            }

            if ($(".header__burger").hasClass("done")) {
                $(".header__burger").removeClass("done").appendTo($(".header__info-container"));
            }
        }
    }

    function adaptive_headerMain() {
        let w = $(window).outerWidth();
        if (w <= 991) {
            if (!$(".header__images").hasClass("done")) {
                $(".header__images").addClass("done").insertAfter($(".header__main-price.price"));
            }
        } else {
            if ($(".header__images").hasClass("done")) {
                $(".header__images").removeClass("done").prependTo($(".header__main"));
            }
        }
    }

    function adaptive_guarantee() {
        let w = $(window).outerWidth();
        if (w <= 1024) {
            if (!$(".result__guarantee-footer").hasClass("done")) {
                $(".result__guarantee-footer")
                    .addClass("done")
                    .insertAfter($(".result__guarantee-content"));
            }
        } else {
            if ($(".result__guarantee-footer").hasClass("done")) {
                $(".result__guarantee-footer")
                    .removeClass("done")
                    .appendTo($(".result__guarantee-text"));
            }
        }

        if (w <= 740) {
            if (!$(".result__guarantee-left").hasClass("done")) {
                $(".result__guarantee-left")
                    .addClass("done")
                    .insertAfter($(".result__guarantee-title.title"));
            }
        } else {
            if ($(".result__guarantee-left").hasClass("done")) {
                $(".result__guarantee-left")
                    .removeClass("done")
                    .prependTo($(".result__guarantee-content"));
            }
        }
    }

    function adaptive_centers() {
        let w = $(window).outerWidth();
        if (w <= 1248) {
            if (!$(".centers__slider-title").hasClass("done")) {
                $(".centers__slider-title").addClass("done").prependTo($(".main-slider"));
            }
        } else {
            if ($(".centers__slider-title").hasClass("done")) {
                $(".centers__slider-title")
                    .removeClass("done")
                    .prependTo($(".centers__slider-about"));
            }
        }
    }

    function adaptive_rehabilitation() {
        let w = $(window).outerWidth();
        if (w <= 660) {
            if (!$(".rehabilitation-image").hasClass("done")) {
                $(".rehabilitation-image")
                    .addClass("done")
                    .insertAfter($(".rehabilitation-slogan"));
            }
        } else {
            if ($(".rehabilitation-image").hasClass("done")) {
                $(".rehabilitation-image")
                    .removeClass("done")
                    .appendTo($(".rehabilitation__header"));
            }
        }
    }

    function adaptive_certificates() {
        let w = $(window).outerWidth();
        if (w <= 1180) {
            if (!$(".certificates__thanks-footer").hasClass("done")) {
                $(".certificates__thanks-footer")
                    .addClass("done")
                    .insertAfter($(".certificates__thanks"));
            }
        } else {
            if ($(".certificates__thanks-footer").hasClass("done")) {
                $(".certificates__thanks-footer")
                    .removeClass("done")
                    .appendTo($(".certificates__thanks-text"));
            }
        }

        if (w <= 767) {
            if (!$(".certificates__thanks-text").hasClass("done")) {
                $(".certificates__thanks-text")
                    .addClass("done")
                    .insertAfter($(".certificates__thanks-footer"));
            }
        } else {
            if ($(".certificates__thanks-text").hasClass("done")) {
                $(".certificates__thanks-text")
                    .removeClass("done")
                    .appendTo($(".certificates__thanks"));
            }
        }
    }

    function adaptive_consultation() {
        let w = $(window).outerWidth();

        if (w <= 1200) {
            if (!$(".consultation__get-footer").hasClass("done")) {
                $(".consultation__get-footer")
                    .addClass("done")
                    .insertAfter($(".consultation__wrapper"));
            }
            if (!$(".consultation__doctor-footer").hasClass("done")) {
                $(".consultation__doctor-footer")
                    .addClass("done")
                    .insertAfter($(".consultation__wrapper"));
            }
        } else {
            if ($(".consultation__get-footer").hasClass("done")) {
                $(".consultation__get-footer")
                    .removeClass("done")
                    .appendTo($(".consultation__get"));
            }
            if ($(".consultation__doctor-footer").hasClass("done")) {
                $(".consultation__doctor-footer")
                    .removeClass("done")
                    .appendTo($(".consultation__doctor"));
            }
        }

        if (w <= 640) {
            if (!$(".consultation__get").hasClass("done")) {
                $(".consultation__get")
                    .addClass("done")
                    .insertAfter($(".consultation__doctor-footer"));
            }
        } else {
            if ($(".consultation__get").hasClass("done")) {
                $(".consultation__get").removeClass("done").appendTo($(".consultation__wrapper"));
            }
        }
    }

    function adaptive_footer() {
        let w = $(window).outerWidth();
        if (w <= 1024) {
            if (!$(".footer-def-btn.def-btn").hasClass("done")) {
                $(".footer-def-btn.def-btn").addClass("done").insertBefore($(".footer__text"));
            }
        } else {
            if ($(".footer-def-btn.def-btn").hasClass("done")) {
                $(".footer-def-btn.def-btn").removeClass("done").prependTo($(".footer__top-right"));
            }
        }

        if (w <= 720) {
            if (!$(".footer__top-right").hasClass("done")) {
                $(".footer__top-right").addClass("done").insertAfter($(".footer-def-btn.def-btn"));
            }
        } else {
            if ($(".footer__top-right").hasClass("done")) {
                $(".footer__top-right").removeClass("done").appendTo($(".footer__top"));
            }
        }
    }

    function removeOnResize(params) {
        let w = $(window).outerWidth();
        if (w >= 769) {
            $(".header__burger").removeClass("active");
            $(".overlay").removeClass("active");
            $(".burger__menu").removeClass("active");
        }
        
    }

    function adaptive_function() {
        adaptive_header();
        adaptive_consultation();
        adaptive_groups();
        adaptive_footer();
        adaptive_headerMain();
        adaptive_guarantee();
        adaptive_centers();
        adaptive_certificates();
        adaptive_nav();
        adaptive_staff();
        adaptive_rehabilitation();
        preventJQcss();
        removeOnResize();
    }

    $(window).resize(function (event) {
        adaptive_function();
    });

    adaptive_function();
});
