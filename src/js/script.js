//= component/jquery.js
//= component/slick.js
//= component/maskedinput.js
//= component/validate.js

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
    
    /*

        Mask input

    */
  
    $('.js-popup__input_phone').mask("+7 (999) 999-99-99", {
        autoclear: false
    });

    /*

        Form validation

    */

    $('.js-popup__form').validate({
        errorClass: 'popup__error',
        rules: {
            name: {
                required: true,
            },
            phone: {
                required: true
            },
            mail: {
                required: true,
                email: true
            },
            agree: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Введите, пожалуйста, Ваше имя'
            },
            phone: {
                required: 'Введите, пожалуйста, Ваш номер телефона'
            },
            mail: {
                required: 'Введите, пожалуйста, Ваш E-Mail адрес',
                email: 'Введите, пожалуйста, корректный E-Mail адрес'
            },
            agree: {
                required: 'Это обязательное поле'
            }
        }
    })

});