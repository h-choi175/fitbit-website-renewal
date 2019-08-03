$( document ).ready(function(){
    $('.drawer').drawer();
    $( "#tabs" ).tabs();
});

$( document ).ready(function(){
    $('.scroll a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 400);
        return false;
    });
});

$(document).ready(function() {
    $( "#tabs" ).tabs();
    $( "#accordion" ).accordion();
    $('.bxslider').bxSlider({
        pager: false,
        controls: true
    });
});
