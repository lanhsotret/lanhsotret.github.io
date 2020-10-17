// $('.bar-nav').on('click', function () {
//     if (!$(this).is('.active')) {
//       $(this).addClass('active');
//       if(window.innerWidth > 768) {
//         $('.nav-menu').css('height', $('.nav-ul').outerHeight() + 'px');
//       } else {
//         $('.nav-wrap').css('height', $('.nav-ul').outerHeight() + $('.nav-entry').outerHeight() + 20 + 'px');
//       }
//       $('header').css('background-color', 'white');
//     } else {
//       $(this).removeClass('active');
//       if(window.innerWidth > 768) {
//         $('.nav-menu').css('height', '0px');
//       }else{
//         $('.nav-wrap').css('height', '0px');
//       }
//       $('header').css('background-color', 'transparent');
//     }
//   });
$('.button_menu_sp').on('click', function() {
  if(!$(this).is('.active')) {
    !$('.header').is('.activeScroll')? $('.header').addClass('activeScroll'): null;
    $(this).addClass('active');
    $('.header nav').addClass('active');
    $('html').css('overflow-y', 'hidden');
  } else {
    $(this).removeClass('active');
    $('.header nav').removeClass('active');
    $('.header').is('.activeScroll')? $('.header').removeClass('activeScroll'): null;
    $('html').css('overflow-y', 'visible');
  }
})

$('.first-view-wrap').on('init', function() {
  function removeClass(ele, mapClass) {
    $.each(ele, function(index){
      for(let i = 0; i <= mapClass.length - 1; i++) {
        if($(this).is('.' + mapClass[i])) {
          setTimeout(() => {
            $(this).removeClass(mapClass[i]);
          }, timeDelay * index);
          break;
        }
        }
    });
    
    }
    removeClass($('.first-view_board .slick-ef'), ['fadeRight','active']);
  setTimeout(function() {
    $('.first-view-wrap').slick('slickPlay');
  }, 3000);
});

$('.first-view-wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  fade: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false
});


$('.first-view-wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.header').is('.active')? $('.header').removeClass('active'): $('.header').addClass('active');
    $('.lg_menu').is('.default')? $('.lg_menu').removeClass('default'): $('.lg_menu').addClass('default');
    $('.first-view_slider-nav li').removeClass('active');
    $('.first-view_slider-nav li').eq(nextSlide).addClass('active');
});

window.addEventListener('scroll', function() {
  (getScrollTop() >= $('.first-view-wrap').outerHeight() - 100)? $('.header').addClass('activeScroll'): $('.header').removeClass('activeScroll');
});

$('.first-view_slider-nav li').on('click', function(){
  $('.first-view-wrap').slick('slickGoTo', $(this).data('order'));
});

$('.solution_slider-inner').on('init', function() {
  $(window).on('checkInView.inview click.inview ready.inview scroll.inview resize.inview', runner);
  if(getScrollTop() === 0) {
    checkInView();
  }
  $('.solution_slider-inner .solution_text-num').addClass('blockSlick');
});

$('.solution_slider-inner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 3000,
  speed: 1200,
  arrows: true,
  prevArrow: $('.solution_button .bttn-prev').get(0),
  nextArrow: $('.solution_button .bttn-next').get(0),
  appendDots: $('.solution_vender').get(0),
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false
});

$('.solution_slider-inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  slick.$slides.eq(nextSlide).addClass('slick-efEnd');
});

$('#backTop').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
});

function scrollToID(id){
  if($(id).offset().top > document.documentElement.scrollTop) {
      var temp = $(id).offset().top - document.documentElement.scrollTop;
  } else {
      temp = document.documentElement.scrollTop - $(id).offset().top;
  }
  // var temp = $(id).offset().top
  $("html,body").animate({ 
    scrollTop: $(id).offset().top
  }, temp / 5);
  // return false;
}

$('.nav-menu-pc > li').on('click', function(e) {
  e.preventDefault();
  scrollToID($(this).data('order'));
});

$('.nav-menu-sp .targetlink').on('click', function(e) {
  e.preventDefault();
  $('.button_menu_sp').removeClass('active');
  $('.header nav').removeClass('active');
  $('html').css('overflow-y','visible');
  scrollToID($(this).data('order'));
});