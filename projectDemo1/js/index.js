$('.modal-show').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 10,
    prevArrow: $('.arrow-wrap.left').get(0),
    nextArrow: $('.arrow-wrap.right').get(0)
});
$('.modal-show').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.modal-figure.slick-slide').removeClass('active');
    if(nextSlide === 10) {
        slick.$slides.eq(nextSlide).next().addClass('active');
        slick.$slides.eq(0).addClass('active');
    }
    if(nextSlide === 0) {
        slick.$slides.eq(10).next().next().addClass('active');
    }
    slick.$slides.eq(nextSlide + 1).addClass('active');
  });
  $('.modal-figure a').on('click', function(e) {
      e.preventDefault();
      $('.modal-content').addClass('active');
      $('.modal-content').children('.modal-inner').eq($(this).data('order') - 1).addClass('active');
      $('html').css('overflow', 'hidden');
  });
  $('.cross-button').on('click', function() {
    $('html').css('overflow', 'visible');
    $('.modal-content').removeClass('active');
    $('.modal-content').children('.modal-inner').removeClass('active');
  });
  $("iframe").on("load", function() {
    let head = $("iframe").contents().find("head");
    let css = '<style>#player {max-width:100%;height:100%;}</style>';
    $(head).append(css);
  });
    