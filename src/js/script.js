document.addEventListener('DOMContentLoaded', function(event) { 

    /*
        Hamburger Navigation
    */

    document.getElementById('nav__closebtn').addEventListener('click', closeNav);
    document.getElementById('navbar-btn').addEventListener('click', openNav);
    
    function linkCloseNav() {
        let link = document.getElementsByClassName('nav__link');
        for (var i = 0; i < link.length; i++) {
            // console.log(link[i]);
            link[i].addEventListener('click', closeNav);
        };
    };

    linkCloseNav();

    function openNav() {
        document.getElementById("nav").style.width = "100%";
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    };

    function closeNav() {
        document.getElementById("nav").style.width = "0";
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    };
});