function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var session = getCookie("session");
  if (session != "") {
    $("body").addClass("turnOff-ef");
  } else {
    $("body").addClass("onlyFirst");
    document.cookie = "session=threeHour; max-age=10800";
    // console.log("false");
  }
}
checkCookie();

$(".banner-Mv").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  autoplay: false,
  speed: 2000,
  pauseOnHover: false,
});

$(".banner-Mv").on("beforeChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  slick.$slides.eq(nextSlide).addClass("slick-scale");
});

$(".banner-Mv").on("afterChange", function (event, slick, currentSlide) {
  $(".banner-Mv-figure").removeClass("slick-opacity");
  slick.$slides.eq(currentSlide).addClass("slick-opacity");
  slick.$slides.eq(currentSlide - 1).removeClass("slick-scale");
});

//$('.first-view-wrap').slick('slickPlay')

// if(window.innerWidth <= 768) {
//   $('.Submit-location').addClass('inview fadeUp');
// }

if ($("body").is(".onlyFirst")) {
  $(".banner_logo").css(
    "transform",
    "translateY(" +
      (window.innerHeight / 2 -
        ($(".banner_logo").offset().top +
          $(".banner_logo").outerHeight() / 2)) +
      "px)");
      $('.sheet-blue').css('z-index', 1);
  $(window).on("load", function () {
    let time = 0;
    $.each($(".banner_svg .text-big"), function (index) {
      var _this = $(this);
      time = index * 50;
      setTimeout(function () {
        _this.removeClass("path-ef");
      }, index * 50);
    });
    setTimeout(function () {
      $(".banner_logo").css("transform", "translateY(0px)").css('transition', 'transform 0.5s ease');
      $(".sheet-blue")
        .css(
          "transform",
          "translateY(" +
            ($(".banner-Mv").outerHeight() - window.innerHeight) +
            "px)"
        )
        .addClass("active");
      $.each($(".inview"), function () {
        $(this).removeClass("fadeUP");
      });
      showText($(".message-primary"));
    }, time + 1000);
    $("#silder-first").addClass("slick-opacity slick-scale");
    setTimeout(function () {
      $(".banner-Mv").slick("slickPlay");
    }, time + 2000);
  });
} else {
  // $(".banner_logo").css('opacity', 1);
  $("#silder-first").addClass("slick-opacity slick-scale");
  setTimeout(function () {
    $(".banner-Mv").slick("slickPlay");
  }, 500);
  showText($(".message-primary"));
  
}
var timeDelay = 0;
function showText(eleTarget) {
  let ArrayText = [];
  $.each($(".message-here"), function () {
    ArrayText.push($(this).html());
  });
  for(let i = 0; i < ArrayText.length; i++) {
    timeDelay = timeDelay + 1000*i
    setTimeout(function () {
      let text = ArrayText[i].split("");
      for (let j = 0; j < text.length; j++) {
        timeDelay = timeDelay + 40*j;
        setTimeout(function () {
          // console.log(timeDelay);
          let word = "<span>" + text[j] + "</span>";
          eleTarget.html(eleTarget.html() + word);
        }, timeDelay);
        if(j === text.length - 1) {
          timeDelay = timeDelay + 2000;
          // console.log(timeDelay);
          setTimeout(function(){
            eleTarget.html('');
          },timeDelay);
        }
      }
      // console.log(timeDelay);
    }, timeDelay);
  }
  setTimeout(function(){
    // console.log(timeDelay);
    showText(eleTarget);
    timeDelay = 0;
  }, timeDelay + 10)
}

$.each($(".sakatsu-board .postCard-body"), function () {
  if ($(this).outerHeight() > 300) {
    $(this).parent().addClass("read-more");
  }
});

$(
  '<div class="form-Checkbox none"></div><div class="form-Checkbox none"></div><div class="form-Checkbox none"></div><div class="form-Checkbox none"></div><div class="form-Checkbox none"></div>'
).appendTo($(".Modal-list_box"));

$(".sakatsu-board .postCard_readmore").on("click", function () {
  $(this)
    .closest(".postCard-wrap")
    .removeClass("read-more")
    .css("max-height", $(this).parent().prev().outerHeight() + 50 + "px");
});


$(".button_menu_sp").on("click", function () {
  if (!$(this).is(".active")) {
    $(this).addClass("active");
    $(".sp-Nav").addClass("active");
    $("html").css("overflow-y", "hidden");
    $(".header").addClass("open-nav");
  } else {
    $(this).removeClass("active");
    $(".sp-Nav").removeClass("active");
    $("html").css("overflow-y", "visible");
    $(".header").removeClass("open-nav");
  }
});
function getScrollTop() {
  return document.documentElement.scrollTop
          || document.body.scrollTop
          || window.scrollY
          || window.pageYOffset;
}
window.addEventListener('scroll', function(){
  if(getScrollTop() >= $('.sakatsu-board.postCards').offset().top && getScrollTop() <= $('.sakatsu-board.postCards').offset().top + $('.sakatsu-board.postCards').outerHeight() - $('.sakatsu-board.TopNews').outerHeight()){
    $('.sakatsu-board.TopNews').css('transform', 'translateY('+ (getScrollTop() - $('.sakatsu-board.postCards').offset().top)+'px)');
  }
  if( getScrollTop() < $('.sakatsu-board.postCards').offset().top) {
    $('.sakatsu-board.TopNews').css('transform', 'translateY(0px)');
  }
  if(getScrollTop()  > $('.sakatsu-board.postCards').offset().top + $('.sakatsu-board.postCards').outerHeight() - $('.sakatsu-board.TopNews').outerHeight()) {
    $('.sakatsu-board.TopNews').css('transform', 'translateY('+ ($('.sakatsu-board.postCards').outerHeight() - $('.sakatsu-board.TopNews').outerHeight()) +'px)');
  }
  if(getScrollTop() > $('.header').outerHeight() * 2) {
    $('.header').addClass('fixed');
    if(getScrollTop() > $('.banner-topPage').outerHeight()) {
      $('.header').addClass('show');
    } else {
      $('.header').removeClass('show');
    }
  } else {
    $('.header').removeClass('fixed');
  }
});

$('.form-Checkbox label').on('click', function(){
  !$(this).is('.active')? $(this).addClass('active'): $(this).removeClass('active');
})

let scrollY = 0;
$(".topSearch_tab.modal").on("click", function () {
  $(".Modal-Top").addClass("active");
    scrollY = getScrollTop();
  if (!$(".Modal-primary").eq($(this).data("modal")).is(".active")) {
    $(".Modal-primary").removeClass("active");
    $(".Modal-primary").eq($(this).data("modal")).addClass("active");
    $('body').addClass('fixed').css('top', -scrollY + 'px');
  }
  $('.Modal-container').on('mouseleave', limitDetect);
  $('.Modal-container').on('mouseenter', removeEvent);
});

$(".icon-cross").on("click", function () {
  $(this).closest(".Modal-primary").removeClass("active");
  $(".Modal-Top").removeClass("active");
  $('body').removeClass('fixed').css('top', 'auto');
  window.scrollTo(0, scrollY);
  $('.Modal-container').unbind();
  checkDetect = false;
});

let checkDetect = false;
function detect(e) {
    if(!$.contains(e.target, $('.Modal-container'))) {
        $('.Modal-Top').removeClass('active');
        $('.Modal-primary').removeClass('active');
        $('body').removeClass('fixed');
        window.removeEventListener('click', detect);
        $('.Modal-container').unbind();
        window.scrollTo(0, scrollY);
    }
}
function limitDetect(){
    !checkDetect? window.addEventListener('click', detect): '';
    checkDetect = true;
}
function removeEvent() {
    checkDetect? window.removeEventListener('click', detect): '';
    checkDetect = false;
}