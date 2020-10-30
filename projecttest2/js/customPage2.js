$(".sectionPrimary__ul > li").on('click', function(){
    if(!$('.modal__container').eq($(this).data('order')).is('.active')) {
        $('.modal').addClass('active');
        $('.modal__container').removeClass('active');
        $('.modal__container').eq($(this).data('order')).addClass('active');
    }
    $('.modal__container').on('mouseleave', limitDetect);
    $('.modal__container').on('mouseenter', removeEvent);
    window.innerWidth <= 768? $('html').css('overflow', 'hidden') : Scroll.disable();
});
$('.modal__cross').on('click', function(){
    $('.modal__container').removeClass('active');
    $('.modal').removeClass('active');
    $('.modal__container').unbind();
    window.removeEventListener('click', detect);
    checkDetect = false;
    window.innerWidth <= 768 ? $('html').css('overflow', 'unset') : Scroll.enable();
});
let checkDetect = false;
function detect(e) {
    if(!$.contains(e.target, $('.modal__container'))) {
        $('.modal__container').removeClass('active');
        $('.modal').removeClass('active');
        window.removeEventListener('click', detect);
        // window.removeEventListener('mouseleave', limitDetect)
        $('.modal__container').unbind();
    }
    ScrollPage2.enable();
}

function limitDetect(){
    !checkDetect? window.addEventListener('click', detect): '';
    checkDetect = true;
}
function removeEvent() {
    checkDetect? window.removeEventListener('click', detect): '';
    checkDetect = false;
}

const ScrollPage2 = (function() {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};
    function preventDefault(e) {
        e.preventDefault();
    }
    function preventDefaultForScrollKeys(e) {
        if(keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () { supportsPassive = true; } 
        }));
      } catch(e) {
          console.log('not catch error');
      }
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    
    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    return {
        disable: disableScroll,
        enable: enableScroll
    }
})();