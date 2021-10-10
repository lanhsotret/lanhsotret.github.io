var lastScrollTop = 0;
var _inside = 0;
var _delay = 0;
const _wh = window.innerHeight;
var _true = true;
$(window).on("load scroll", function () {
    if (_true) {
        _a();
        _true = false;
    } else {
        _d(function () {
            _true = true;
            _a();
            _delay = 0;
        }, 100);
    }
    _delay = 0;
});
var xx;
function _d(fn, t) {
    clearTimeout(xx);
    return (xx = setTimeout(fn, t));
}
function _a(e) {
    //let _y = window.scrollY;
    let _y = window.pageYOffset;

    $.each($(".ani-scroll"), function (e) {
        if (!$(this).hasClass("active")) {
            let _posY = _y + _wh - _wh * 0.05;
            if ($(this).offset().top < _posY && $(this).offset().top > _y) {
                $(this).css("transition-delay", _delay + "s");
                _delay += 0.12;
                $(this).addClass("active");
            } else if ($(this).offset().top < _y) {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                }
            }
        }
    });
}
