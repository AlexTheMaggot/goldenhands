$(document).ready(function () {
    $('#burger').on('click', function () {
        if ($('.burger__strip_1').hasClass('burger__strip_1_rotated')) {
            $('.burger__strip_1').removeClass('burger__strip_1_rotated');
            $('.burger__strip_2').removeClass('burger__strip_2_rotated');
            $('.burger__strip_3').removeClass('burger__strip_3_rotated');
            $('.burger__strip').addClass('burger__strip_onestrip');
            setTimeout(function () {
                $('.burger__strip').removeClass('burger__strip_onestrip');
            }, 300)
        } else {
            $('.burger__strip').addClass('burger__strip_onestrip');
            setTimeout(function () {
                $('.burger__strip_1').addClass('burger__strip_1_rotated');
                $('.burger__strip_2').addClass('burger__strip_2_rotated');
                $('.burger__strip_3').addClass('burger__strip_3_rotated');
                $('.burger__strip').removeClass('burger__strip_onestrip');
            }, 300)
        }

        $('.background').toggleClass('blocked');
        $('html').toggleClass('blocked');
        $('.menu').toggleClass('menu_opened');
        $('.header').toggleClass('header_blocked');
        $('.header__filler').toggleClass('header__filler_active');
    });
    $('.fullscreen').slick({
        asNavFor: ('.navigation')
    });
    $('.navigation').slick({
        asNavFor: '.fullscreen',
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: true
    });
    $('.reviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.desktopmenu__li>a[href^="#"]').click(function (e) {
        e.preventDefault();
        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1000);
    });
    $('.menu__li>a[href^="#"]').click(function (e) {
        e.preventDefault();
        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top;
        $('.burger__strip_1').removeClass('burger__strip_1_rotated');
        $('.burger__strip_2').removeClass('burger__strip_2_rotated');
        $('.burger__strip_3').removeClass('burger__strip_3_rotated');
        $('.burger__strip').addClass('burger__strip_onestrip');
        setTimeout(function () {
            $('.burger__strip').removeClass('burger__strip_onestrip');
            $('html').animate({scrollTop: destination}, 1000);
        }, 300);
        $('.background').toggleClass('blocked');
        $('html').toggleClass('blocked');
        $('.menu').toggleClass('menu_opened');
        $('.header').toggleClass('header_blocked');
        $('.header__filler').toggleClass('header__filler_active');
    });
    $(".modal_modal").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal_modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal_modal = $($this).data("modal_modal");

        $(modal_modal).parents(".overlay").addClass("open");
        setTimeout(function () {
            $(modal_modal).addClass("open");
        }, 350);

        $(document).on('click', function (e) {
            var target = $(e.target);

            if ($(target).hasClass("overlay")) {
                $(target).find(".modal_modal").each(function () {
                    $(this).removeClass("open");
                });
                setTimeout(function () {
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

    $(".close-modal_modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal_modal = $($this).data("modal_modal");

        $(modal_modal).removeClass("open");
        setTimeout(function () {
            $(modal_modal).parents(".overlay").removeClass("open");
        }, 350);

    });
});