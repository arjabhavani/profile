

$(document).ready(function () {


    $('.service-list-item').on('click', function () {
        $('.service-list-item').removeClass('active');
        $(this).addClass('active');

        const value = $(this).attr('data-filter');
        if (value == "all") {
            $('.work-box').show(1000);
        }
        else {
            $('.work-box').hide(1000);
            $('.work-box.' + value).show(1000);
        }
    });

    // $('.category-two').on('click', function () {
    //     $(".app").show();
    //     $(".work-box").siblings().hide();
    // });
    // $('.category-two').on('click', function () {
    //     $(".ui-ux").show();
    //     $(".work-box").siblings().hide();
    // });
    // $('.category-one').on('click', function () {
    //     $(".graphic").show();
    //     $(".work-box").siblings().hide();
    // });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(".side-close-btn").on('click', function () {
        $(".nav-menu-box-mobile-slide").removeClass('active');
    });
    $('.hamburger').on('click', function () {
        $(".nav-menu-box-mobile-slide").toggleClass('active');
    });


    var tab = $('.tabsTitle .tabButton'),
        content = $('.tabsContent .tabContent');

    if (location.hash) {
        tab.filter('[href="' + location.hash + '"]').addClass('active');
        content.removeClass('active').filter(location.hash).addClass('active');
    } else {
        tab.filter(':first').addClass("active");
        content.filter(':first').addClass("active");
    }

    tab.click(function () {
        if (location.hash) {
            var tabid = location.hash;
        } else {
            var tabid = $(this).attr("href");
        }
        tab.removeClass("active").filter('[href="' + tabid + '"]').addClass("active");
        content.removeClass("active").filter(tabid).addClass("active");
    });

    $(window).bind('hashchange', function () {
        tab.trigger("click");
    });
})