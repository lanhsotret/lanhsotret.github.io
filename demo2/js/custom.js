
setTimeout(function() {
  $('.show-slick').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false
  });
}, 1000);

var sliderEffect = function () {
  var n = 1;

  function setStart(ele) {
    ele.children().clone(true).appendTo(ele);
    var heightCheck = 0;
    $.each(ele.children(), function () {
      heightCheck = $(this).outerHeight();
      $(this).data("trans", 0);
    });

    function moveSlider() {
      $.each(ele.children(), function (index) {
        $(this).data("trans", $(this).data("trans") - n);
        var move = $(this).data("trans");
        $(this).css("transform", "translate3d(0, ".concat(move, "px, 0)"));

        if (move <= 0 && Math.abs(move) >= heightCheck * (index + 1)) {
          $(this).data("trans", heightCheck * Math.abs(index - 1));
          $(this).css("transform", "translate3d(0, ".concat($(this).data("trans"), "px, 0)"));
        }
      });

      _reqAnimation(moveSlider);
    }

    moveSlider();
  }

  function sliderH(ele) {
    ele.children().clone(true).appendTo(ele);
    var WidthCheck = 0;
    $.each(ele.children(), function (index) {
      WidthCheck = $(this).outerWidth();
      $(this).data("trans", 0);
    });

    function runSlider() {
      $.each(ele.children(), function (index) {
        $(this).data("trans", $(this).data("trans") - n);
        var move = $(this).data("trans");
        $(this).css("transform", "translate3d(".concat(move, "px,0,0)"));

        if (move <= 0 && Math.abs(move) >= WidthCheck * (index + 1)) {
          $(this).data("trans", WidthCheck * Math.abs(index - 1));
          $(this).css("transform", "translate3d(".concat($(this).data("trans"), "px,0,0)"));
        }
      });

      _reqAnimation(runSlider);
    }

    runSlider();
  }

  var _reqAnimation = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

  return {
    setStart: setStart,
    sliderH: sliderH
  };
}();

setTimeout(function () {
  if(window.innerWidth > 1024) {
    sliderEffect.setStart($('.page4-slider.slider1'));
    sliderEffect.setStart($('.page4-slider.slider2'));
  } else {
    sliderEffect.sliderH($('.page4-slider.slider3'));
    sliderEffect.sliderH($('.page4-slider.slider4'));
  }
}, 1000);
function getScrollTop() {
  return document.documentElement.scrollTop
          || document.body.scrollTop
          || window.scrollY
          || window.pageYOffset;
}
var heightBody = $('body').outerHeight();
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

  function eventDot() {
    $.each($('.footer-dots .dot'), function () {
      animate($(this), $($(this).data('id')).data('scroll'));
    });
    $.each($('.header-li'), function () {
      animate($(this), $($(this).data('id')).data('scroll'));
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
    eventDot: eventDot
  };
}();

setValue.dotPosition();
setValue.showDots();
setValue.eventDot();
window.addEventListener('resize', function () {
  screenWidth = $('body main').outerWidth() * 5;
  screenHeigh = window.innerHeight;
  scrollHeight = heightBody - screenHeigh;
  setValue.dotPosition();
  $('.bg-cord').css('width', screenWidth + $('body main').outerWidth() + 'px');
  // setTimeout(function () {
  //   if(window.innerWidth > 1024) {
  //     sliderEffect.setStart($('.page4-slider.slider1'));
  //     sliderEffect.setStart($('.page4-slider.slider2'));
  //   } else {
  //     sliderEffect.sliderH($('.page4-slider.slider3'));
  //     sliderEffect.sliderH($('.page4-slider.slider4'));
  //   }
  // }, 1000);
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
