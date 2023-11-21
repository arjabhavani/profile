$(document).ready(function () {

    // $(document).mousemove(function (event) {
    //     console.log('working')
    //     $(".elip").text(event.pageX - ", " + event.pageY);
    // });

    $('.service-list-item').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

})