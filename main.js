$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length){
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top-50
            }, 500);
        }
    });
    $('h3').click(function(){
        var target = '#'+ $(this).get(0).id +'d';
        $(target).animate({
            height:'toggle'
        });
    });
    $('#contact-img').find('img').mouseenter(function(){
        var rotation = 45;
        $(this).css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
                 '-moz-transform' : 'rotate('+ rotation +'deg)',
                 '-ms-transform' : 'rotate('+ rotation +'deg)',
                 'transform' : 'rotate('+ rotation +'deg)',
                    'transition-duration':'0.4s'});
    });
    $('#contact-img').find('img').mouseleave(function(){
        var rotation = 0;
        $(this).css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
                 '-moz-transform' : 'rotate('+ rotation +'deg)',
                 '-ms-transform' : 'rotate('+ rotation +'deg)',
                 'transform' : 'rotate('+ rotation +'deg)',
                    'transition-duration':'0.4s'});
    });
});