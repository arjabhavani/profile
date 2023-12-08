$(document).ready(function () {

    // $(document).mousemove(function (event) {
    //     console.log('working')
    //     $(".elip").text(event.pageX - ", " + event.pageY);
    // });

    $('.service-list-item').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $(".side-close-btn").on('click', function () {
        $(".nav-menu-box-mobile-slide").removeClass('active');
    });
    $('.hamburger').on('click', function () {
        $(".nav-menu-box-mobile-slide").toggleClass('active');
    });

})