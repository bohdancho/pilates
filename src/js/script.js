//= component/jquery.js
//= component/slick.js

document.addEventListener('DOMContentLoaded', function(event) { 

    /*
        Hamburger Navigation
    */

    document.querySelector('.js-nav__closebtn').addEventListener('click', closeNav);
    document.querySelector('.js-navbar-btn').addEventListener('click', openNav);

    for (var i = 0; i < document.querySelectorAll('.js-nav__link').length; i++) {
        document.querySelectorAll('.js-nav__link')[i].addEventListener('click', closeNav);
    };

    function openNav() {
        document.querySelector('.nav').style.width = '100%';
        document.querySelector('body').style.overflowY = 'hidden';
    };

    function closeNav() {
        document.querySelector('.nav').style.width = '0';
        document.querySelector('body').style.overflowY = 'scroll';
    };

    /*

        Slider

    */

    $('.slider__container').slick({
        prevArrow: '.slider__prev',
        nextArrow: '.slider__next',
        dots: true
    });

    
    setEqualHeight($('.slider__item-container'));

    function setEqualHeight(columns) {
        var currentHeight;
        var tallestcolumn = 0;
        columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
    
    
    /*

        Modal

    */

    for (var i = 0; i < document.querySelectorAll('.js-cost__button').length; i++) {
        document.querySelectorAll('.js-cost__button')[i].addEventListener('click', function() {
            $('.js-popup').fadeIn();
        });
    };
    
    document.querySelector('.js-popup__close').addEventListener('click', function() {
        $('.js-popup').fadeOut();
    });

    /*

        Smooth scroll

    */

    $('.js-smooth-scroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    
});