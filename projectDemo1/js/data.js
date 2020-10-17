var _windowW = $(window).innerWidth();
var _windowHeight = $(window).innerHeight();
var _jsplane = $('.js-plane');
var _plane = $('.plane');
var _fall = $('.fall');
var _currentHeight = 0;
var _windowYOffset = 0;

$(window).on('scroll load resize', function () {

    _windowYOffset = window.pageYOffset;
    _currentHeight = _windowYOffset + _windowHeight - _windowHeight*0.25;

    delayF(myAnimate(_currentHeight),100)();
    delayF(getTimeline(_currentHeight),100)();
    delayF(setOdo(_currentHeight),100)();
    delayF(setChart1(_currentHeight),100)();
    delayF(setChart2(_currentHeight),100)();
    delayF(setJsPlane(_currentHeight),100)();
});
var _pl = 0;
function setJsPlane(windowHeight){
    let _this = $('.global-map');
    if(_windowW >= 1600){
        if(_this.offset().top <= windowHeight && _pl == 0){
            _this.find('.js-plane').addClass('active');
            recal();
        }
    }
    else{
        if(_this.offset().top <= windowHeight){
            $('.global-map__mark').addClass('active');
            _plane.addClass('active');
        }

    }

}

function setOdo(windowHeight){
    $('.odometer').each(function(index, vl) {

        let _thisOffset = $(this).offset().top;

        if(_thisOffset <= windowHeight){

            let odoValue = $(this).attr('data-value');
            let ew = vl;

            ew.innerHTML = odoValue;
        }
    });
 }

var _ch2 = 0;
var _ch1 = 0;
function setChart2(windowHeight){

    let _this = $('.balance__chart-2');

    if(_this.offset().top <= windowHeight && _ch2 == 0){

        let _chart_2 = _this.find('.balance__chart');

        let myChart = new Chart(_chart_2, {
            type: 'pie',
            data: {
                datasets: [{
                    backgroundColor: ["#00c2b1", "#d6001c", "#1b65c3"],
                    hoverBackgroundColor: ["#00c2b1", "#d6001c", "#1b65c3"],
                    data: [36, 39, 25],
                    borderWidth: 0
                }]
            },
            options: {
                tooltips: {
                    enabled: false,
                }
            },
        });

        _ch2 = -1;
    }
}

function setChart1(windowHeight){

    let _this = $('.balance__chart-1');

    if(_this.offset().top <= windowHeight && _ch1 == 0){

        let _chart_1 = _this.find('.balance__chart');

        let myChart = new Chart(_chart_1, {
            type: 'pie',
            data: {
                datasets: [{
                    backgroundColor: ["#d6001c", "#00c2b1", "#1b65c3"],
                    hoverBackgroundColor: ["#d6001c", "#00c2b1", "#1b65c3"],
                    data: [77, 15, 8],
                    borderWidth: 0
                }]
            },
            options: {
                tooltips: {
                    enabled: false,
                }
            },
        });

        _ch1 = -1;
    }
}


function setTop(){
    if(_windowW >= 1600){
        $.each(_fall, function() {
            let _locTop = $(this).css('top');
            $(this).data('data-top',_locTop);
            $(this).css({'top':0});
        });
    }
    else{
        $.each(_fall, function() {
            $(this).remove();
        });
    }
}

setTop();

function recal() {

    let _parentH = $('.global-map').innerHeight();
    let _parentW = $('.global-map').innerWidth();

    var _fall = $('.fall');
    var _p = _jsplane.position().left;

    if (_p < _parentW) {

        var _pos = _p + _jsplane.innerWidth()*0.5 ;

        delayF(recal, 100)();
        falling(_pos, _parentH);
    }
    else{
        _plane.addClass('active');
    }
}

function falling(pos, ph) {

    $.each(_fall, function() {

        let _left = $(this).position().left;
        let _ph = ph;

        if (_left <= pos) {
            // if(_windowW >= 1600){
                
                let _locTop = $(this).data('data-top');
                $(this).addClass('active').css({'transform':'translateY('+_locTop+')'}).removeClass('fall');
                let _sl = _locTop.split('').slice(0, _locTop.length - 2).join('');
                var _transitionDuration =  (_sl / _ph)*10;

                $(this).css({
                     'transition-duration': _transitionDuration+'s',
                });
            // }
        }
    })
}


function myAnimate(windowHeight){

    var _myanimate = $('.myanimate');

    $.each(_myanimate, function(){
        if($(this).offset().top <= windowHeight){
            $(this).addClass('active');
            $(this).removeClass('myanimate');
        }
    });
}

myAnimate();

function getTimeline(windowHeight){

    var _timeline = $('.js-timeline.active');

    $.each(_timeline, function(){

        let _parentHeight = $(this).parent().height();
        let _parentOffsetTop = $(this).parent().offset().top;
        var _parentTotal = _parentHeight + _parentOffsetTop;

        if(_parentTotal + 50<= windowHeight ){
            $(this).addClass('js-active');
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
