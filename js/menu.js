/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Date Picker
5. Init Time Picker


******************************/

$(document).ready(function() {
    "use strict";

    /* 

    1. Vars and Inits

    */

    var header = $('.header');
    var hamburgerBar = $('.hamburger_bar');
    var hamburger = $('.hamburger');

    setHeader();

    $(window).on('resize', function() {
        setHeader();

        setTimeout(function() {
            $(window).trigger('resize.px.parallax');
        }, 375);
    });

    $(document).on('scroll', function() {
        setHeader();
    });

    initDatePicker();
    initTimePicker();
    initMenu();

    /* 

    2. Set Header

    */

    function setHeader() {
        if ($(window).scrollTop() > 91) {
            header.addClass('scrolled');
            hamburgerBar.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
            hamburgerBar.removeClass('scrolled');
        }
    }

    /* 

    3. Init Menu

    */

    function initMenu() {
        if ($('.menu').length) {
            var menu = $('.menu');
            hamburger.on('click', function() {
                hamburger.toggleClass('active');
                menu.toggleClass('active');
            });
        }
    }

    /* 

    4. Init Date Picker

    */

    function initDatePicker() {
        var dp = $('#datepicker');
        var date = new Date();
        var dateM = date.getMonth() + 1;
        var dateD = date.getDate();
        var dateY = date.getFullYear();
        var dateFinal = dateM + '/' + dateD + '/' + dateY;
        dp.val(dateFinal);
        dp.datepicker();
    }

    /* 

    5. Init Time Picker

    */

    function initTimePicker() {
        $('.timepicker').timepicker({
            interval: 60,
            minTime: '10',
            maxTime: '6:00pm',
            defaultTime: '11',
            startTime: '10:00',
            dynamic: true,
            dropdown: true,
            scrollbar: true
        });
    }

});
document.querySelector("body > div > div.container > div.swiper-container.stories.swiper-container-initialized.swiper-container-horizontal");




// Porfolio isotope and filter
$(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
        aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
        $('.venobox').venobox();
    });
});


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo', function() {
        $(".nav-menu ul:first li:first").addClass('active');
    });

    return false;
});