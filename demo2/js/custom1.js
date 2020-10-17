$('.show-slick').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  arrows: false
});
var _reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
var AnimationFrame;
var sliderEffect = (function() {
  var n = 1;
  function setStart(ele) {
    $.each(ele, function() {
      if($(this).children().length <= 1) {
        $(this).children().clone(true).appendTo($(this));
      }
      let height = $(this).children().eq(0).outerHeight();
      $(this).data('height', height);
      $.each(ele.children(), function () {
        $(this).data("trans", 0);
        $(this).css('transform', "translate3d(0, ".concat($(this).data('trans'), "px, 0)"));
      });
    });
  }
  function moveSliderV(ele) {
    function animateFrame() {
      $.each(ele, function() {
        $.each($(this).children(), function (index) {
          $(this).data("trans", $(this).data("trans") - n);
          var move = $(this).data("trans");
          $(this).css("transform", "translate3d(0, ".concat(move, "px, 0)"));
          if (move <= 0 && Math.abs(move) >= $(this).parent().data('height') * (index + 1)) {
            $(this).data("trans", $(this).parent().data('height') * Math.abs(index - 1));
            $(this).css("transform", "translate3d(0, ".concat($(this).data("trans"), "px, 0)"));
          }
        });
      });
      AnimationFrame = _reqAnimation(animateFrame);
    }
    animateFrame();
  }
  function sliderH(ele) {
    $.each(ele, function() {
      if($(this).children().length <= 1) {
        $(this).children().clone(true).appendTo($(this));
      }
      let width = $(this).children().eq(0).outerWidth();
      $(this).data('width', width);
      $.each(ele.children(), function () {
        $(this).data("trans", 0);
        $(this).css("transform", "translate3d(".concat($(this).data("trans"), "px,0,0)"));
      });
    });
  }
  function runSliderH(ele) {
    function animateFrameH() {
      $.each(ele, function() {
        $.each($(this).children(), function (index) {
          $(this).data("trans", $(this).data("trans") - n);
          var move = $(this).data("trans");
          $(this).css("transform", "translate3d(".concat(move, "px,0,0)"));
          if (move <= 0 && Math.abs(move) >= $(this).data('width') * (index + 1)) {
            $(this).data("trans", $(this).data('width') * Math.abs(index - 1));
            $(this).css("transform", "translate3d(".concat($(this).data("trans"), "px,0,0)"));
          }
        });
      });
      AnimationFrame = _reqAnimation(animateFrameH);
    }
    animateFrameH();
  }
  return {
    setStart: setStart,
    sliderH: sliderH,
    moveSliderV: moveSliderV,
    runSliderH: runSliderH
  };
})();
function runSlider() {
  if(window.innerWidth > 1024) {
    cancelAnimationFrame(AnimationFrame);
      sliderEffect.setStart($('.page4-slider.slider1, .page4-slider.slider2'));
      sliderEffect.moveSliderV($('.page4-slider.slider2, .page4-slider.slider1'));
  } else {
    cancelAnimationFrame(AnimationFrame);
      sliderEffect.sliderH($('.page4-slider.slider3, .page4-slider.slider4'));
      sliderEffect.runSliderH($('.page4-slider.slider3, .page4-slider.slider4'));
  }
}
setTimeout(runSlider, 1000);
function getScrollTop() {
  return document.documentElement.scrollTop
          || document.body.scrollTop
          || window.scrollY
          || window.pageYOffset;
}
var heightBody = 10000;
var screenWidth = $('body main').outerWidth() * 5;
var screenHeigh = window.innerHeight,
    scrollHeight = heightBody - screenHeigh;
$('body main').data('translate', 0);
$('.bg-cord').css('width', screenWidth + $('body main').outerWidth() + 'px');

var setValue = function () {
  function animate(ele, value) {
    ele.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: value
      }, 'slow');
    });
  }

  function trans() {
    $.each($('.primary'), function (index) {
      var widthPart = $(this).outerWidth() * index;
      $(this).css('transform', "translateX(".concat(widthPart, "px)"));
      $(this).data('translate', widthPart);
    });
  }

  function scroll() {
    var transMove = getScrollTop() * screenWidth / scrollHeight;
    $('body main').css('transform', "translateX(-".concat(transMove, "px)"));
    $('body main').data('translate', transMove);
  }

  function dotPosition() {
    var gap = 0;
    $.each($('.footer-dots .dot'), function (index) {
      var position = $($(this).data('id')).get(0).getBoundingClientRect().left + $('body main').data('translate');
      $($(this).data('id')).data('position', position);
      var moveScroll = $($(this).data('id')).data('position') * scrollHeight / screenWidth;
      $($(this).data('id')).data('scroll', moveScroll);
    });
    $.each($('.footer-dots .after'), function () {
      var gaptotal = $($(this).data('id')).data('position') - gap;
      gap = $($(this).data('id')).data('position');
      var scrollGap = gaptotal * scrollHeight / screenWidth;
      $(this).data('gap', scrollGap);
    });
  }

  function showDots() {
    $.each($('.footer-dots .dot'), function (index) {
      if ($('body main').data('translate') >= $($(this).data('id')).data('position') - 1) {
        !$(this).is('.active') ? $(this).addClass('active') : '';
        $(this).next().children('.after').css('width', "".concat((getScrollTop() - $($(this).data('id')).data('scroll')) * 100 / $(this).next().children('.after').data('gap'), "px"));
      } else {
        $(this).is('.active') ? $(this).removeClass('active') : '';
        $(this).next().children('.after').css('width', '0px');
      }
    });
  }

  return {
    trans: trans,
    scroll: scroll,
    dotPosition: dotPosition,
    showDots: showDots,
    animateScroll: animate
  };
}();
function runPosition() {
  $.each($('.header-li'), function() {
      $(this).off('click');
      let position = $($(this).data('id')).offset().top - 90;
      $($(this).data('id')).data('scroll', position);
      setValue.animateScroll($(this), $($(this).data('id')).data('scroll'));
  })
}
function Position() {
  if(window.innerWidth > 1024) {
    setValue.dotPosition();
  } else {
    setTimeout(runPosition, 500);
  }
}
Position();
setValue.showDots();
function eventDot() {
  $.each($('.header-li'), function () {
    $(this).off('click');
    setValue.animateScroll($(this), $($(this).data('id')).data('scroll'));
  });
  $.each($('.footer-dots .dot'), function () {
    $(this).off('click');
    setValue.animateScroll($(this), $($(this).data('id')).data('scroll'));
  });
}
eventDot();
window.addEventListener('resize', function () {
  screenWidth = $('body main').outerWidth() * 5;
  screenHeigh = window.innerHeight;
  scrollHeight = heightBody - screenHeigh;
  Position();
  heightBody = 10000;
  $('.bg-cord').css('width', screenWidth + $('body main').outerWidth() + 'px');
  sliderEffect.setStart($('.page4-slider.slider1, .page4-slider.slider2'));
  runSlider();
  eventDot();
});
setValue.scroll();
window.addEventListener('scroll', function () {
  setValue.scroll();
  setValue.showDots();
  if($('.main').data('translate') + window.innerWidth >= $('#recruit').data('position') + $('#recruit').outerWidth()) {
    if($('.page5-odomete').data('odometer') == undefined) {
      initOdometer();
    }
    $('.page5-odomete').data('odometer', true);
  }
});
$('.bar-nav').on('click', function () {
  if (!$(this).is('.active')) {
    $(this).addClass('active');
    $('.header-nav').css('height', "".concat(window.innerHeight - $('.header').outerHeight(), "px"));
    $('html').css('overflow', 'hidden');
  } else {
    $(this).removeClass('active');
    $('.header-nav').css('height', '0px');
    $('html').css('overflow', 'visible');
  }
});


function initOdometer() {
  var ele1 = document.querySelector('.page5-odomete .num1');
    od1 = new Odometer({
      el: ele1,
      value: "0000",
      format: '',
      theme: 'default',
      format: 'd'
    });
    var ele2 = document.querySelector('.page5-odomete .num2');
    od2 = new Odometer({
      el: ele2,
      value: "00",
      format: '',
      theme: 'default',
      format: 'd'
    });
  ele1.innerHTML = 1946;
  ele2.innerHTML = 80;
}
