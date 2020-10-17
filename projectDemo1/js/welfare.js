var _windowHeight = $(window).innerHeight();

$(window).on('scroll load', function () {

    _windowYOffset = window.pageYOffset;
    _currentHeight = _windowYOffset + _windowHeight - _windowHeight*0.25;

    delayF(myAnimate(_currentHeight),100)();
});

function myAnimate(windowHeight){

    var _myanimate = $('.myanimate');

    $.each(_myanimate, function(){
        if($(this).offset().top <= windowHeight){
            $(this).addClass('active');
            $(this).removeClass('myanimate');
        }
    });
}


function delayF(func, timed) {
    let timeout;
    return function() {
        let _f = func;
        clearTimeout(timeout);
        timeout = setTimeout(_f, timed);
    };
}
