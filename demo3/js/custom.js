$('.header__slider').slick({
    arrows: false,
    dot: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipeToSlide: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    speed: 4000
});
$('.header__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    slick.$slides.eq(nextSlide).addClass('slick-scale');
  });
$('.header__slider').on('afterChange', function(event, slick, currentSlide){
    $('.header__figure').removeClass('slick-opacity');
    slick.$slides.eq(currentSlide).addClass('slick-opacity');
    slick.$slides.eq(0).removeClass('active');
    slick.$slides.eq(currentSlide - 1).removeClass('slick-scale');
  });


const sliderFade = (function(){
  function eventHover() {
    $('.business__board--li').on('mouseover', function(){
      if(!$(this).is('.active')) {
        $('.business__board--li').removeClass('active');
        $(this).addClass('active');
        $('.business__figure').removeClass('active');
        $('.business__figure').eq($(this).data('order')).addClass('active');
      }
    })
  }
  
  function eventCross() {
    $('.header__cross').on('click', function(){
      if(!$(this).is('.active')) {
        $(this).addClass('active');
        $('.header__nav').addClass('active');
        let timer = 100;
        $.each($('.header__nav').find('li'), function(){
          let _this = $(this);
          setTimeout(function(){
            _this.addClass('active');
          }, timer);
          timer +=200;
        })
      } else {
        $(this).removeClass('active');
        $('.header__nav').removeClass('active');
        let timer = 600;
        $.each($('.header__nav').find('li'), function(){
          let _this = $(this);
          setTimeout(function(){
            _this.removeClass('active');
          }, timer);
          timer -=100;
        })
      }
    })
  }
  function StickyEvent(ele) {
    let sticky = ele.get(0).offsetTop;
    window.addEventListener('scroll', function(){
      if(window.pageYOffset > sticky) {
        ele.addClass('sticky');
      } else {
        ele.removeClass('sticky');
      }
    })
  }
  function eventMobile() {
    $('.business__boardMobile--num > span').on('mouseover', function(){
      if(!$(this).is('.active')) {
        $('.business__boardMobile--num > span').removeClass('active');
        $(this).addClass('active');
        $('.business__boardMobile--title > a').removeClass('active');
        $('.business__boardMobile--title > a').eq($(this).data('order')).addClass('active');
        $('.business__figure').removeClass('active');
        $('.business__figure').eq($(this).data('order')).addClass('active');
      }
    })
  }
  return {
    hover:eventHover,
    cross:eventCross, 
    sticky: StickyEvent,
    numMobile: eventMobile
  }
})();
sliderFade.hover();
sliderFade.cross();
sliderFade.sticky($('.header__bar'));
sliderFade.numMobile();

"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SplitByWord = function () {
  function splitText(ele) {
    var ArrayText = ele.html().split('');
    var text = '';

    var _iterator = _createForOfIteratorHelper(ArrayText),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var word = _step.value;
        text += '<span>' + word + '</span>';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    ele.html(text);
  }

  return {
    words: splitText
  };
}();

SplitByWord.words($('.business__title--span'));
SplitByWord.words($('.recruit__title--content'));
SplitByWord.words($('.case__title--content'));