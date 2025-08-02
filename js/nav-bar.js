$(document).ready(function(){
    $('.icon').on('click', function(){
        $('nav ul').toggleClass('showing');

    });
    
    $('.icon').on('mouseleave', function(){
        $('nav ul').toggleClass('showing');
    });
});