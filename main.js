

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

    $('.tabContent:first').show();
    $('.tabsTitle a:first').addClass('active');
    $('.tabsTitle a').click(function (event) {
        event.preventDefault();
        console.log(event);
        index = $(this).index();
        $('.tabsTitle a').removeClass('active');
        $(this).addClass('active');
        $('.tabContent').hide();
        $('.tabContent').eq(index).show();
    });

    $("#email").on("keyup", function (event) {
        let emailId = $(this).val();
        if (emailId.length >= 5) {
            $(".input-box button").prop("disabled", false);
        }else{
            $(".input-box button").prop("disabled", true);
        }
        
        // if (emailId != "") {
        //     $(".input-box button").prop("disabled", false);
        // } else {
        //     $(".input-box button").prop("disabled", true);
        // }
    })

    $(".input-box button").prop("disabled", true);

    $(".input-box button").on("click", function (event) {
        let emailId = $("#email").val();
        if (emailId == "") {
            alert("Please enter Email Id to proceed further");
        } else {
            $(this).prop("disabled", true);
        }
    });
    
    
    $(".contact-form button").on("click", function (event) {
        let fname = $("#fname").val();
        let fsub = $("#fsub").val();
        let message = $("#message").val();
        let emailId = $("#email").val();
        let lname = $("#lname").val();
        let fcontact = $("#fcontact").val();
        let focusEnabled= false;
        if (fname == "") {
            // alert("Please enter first name to proceed further");
            // $("#name_alert").show();
            $("#fname-error").show();
            if(!focusEnabled) {
                $("#fname").focus();
                focusEnabled= true;
            }
        }
        if (lname == "") {
            // alert("Please enter last name to proceed further");
            $("#lname-error").show();
            if(!focusEnabled) {
                $("#lname").focus();
                focusEnabled= true;
            }
        } 
        if (emailId == "") {
            // alert("Please enter email id to proceed further");
            $("#email-error").show();
            if(!focusEnabled) {
                $("#email").focus()
                focusEnabled= true;
            }
        } 
        if (fcontact =="") {
            // alert("Please enter contact no to proceed further");
            $("#fcontact-error").show();
            if(!focusEnabled) {
                $("#fcontact").focus()
                focusEnabled= true;
            }
        } 
        if (fsub == "") {
            // alert("Please enter subject to proceed further");
            $("#fsub-error").show();
            if(!focusEnabled) {
                $("#fsub").focus()
                focusEnabled= true;
            }
        }
        if (message == "") {
            // alert("Please enter message to proceed further");
            $("#message-error").show();
            if(!focusEnabled) {
                $("#message").focus()
                focusEnabled= true;
            }
        }

        if(!focusEnabled) {
            let fnamecheck = $("#fname_check").val();
            
        }
        
    });

    $("#fname, #lname, #email, #fcontact, #message").on("input", (event) =>{
        let value= event.target.value;
        if(value == ""){
            $(`#${event.target.id}-error`).show();
        }else{
            $(`#${event.target.id}-error`).hide();
        }
    });

    $("#email").on("click", function (event) {
        
        if (emailId != "") {
            $(".contact-form button").prop("disabled", false);
        } else {
            $(".contact-form button").prop("disabled", true);
        }
    });
  
    // $("#contact-two-btn").on("click", function (event) {
    //     if (fname == "") {
    //     $("#name_alert").prop("disabled", true);
        
    //     }else{
    //         $("#name_alert").prop("disabled", false);
    //     }
    // });
    // function validateForm() {
    //     var fname = document.forms[0].name.value;
    //     var femail = document.forms[0].email.value;
      
    //     if (fname == "") {
    //       alert("Please enter your name");
    //       return false;
    //     }
      
    //     if (femail == "") {
    //       alert("Please enter your email address");
    //       return false;
    //     }
      
    //     if (!email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}")) {
    //       alert("Please enter a valid email address");
    //       return false;
    //     }
      
    //     return true;
    //   }
    
});