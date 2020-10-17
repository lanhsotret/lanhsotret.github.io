
/*new WOW().init();*/
$(function(){
	$('.staff-mv__text').addClass('init');

	if($('.external-links__list--slide')[0]){
		$('.external-links__list--slide').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		});
	}
});

setTimeout(function() {
	$('.topTittle .ef-gradient').addClass('active');
}, 300);

$('.header-list.bar').on('click', function() {
	if(!$(this).is('.cross-henshin')) {
		$(this).addClass('cross-henshin');
		$('.nav-menu').addClass('active')
		$('.header').addClass('hidden');
		$('html').css('overflow-y', 'hidden');
		$.each($('.nav-menu .ef-gradient'), function(index) {
			let _this = $(this);
			setTimeout(function() {
				_this.addClass('active');
			}, index * 300);
		})
	} else {
		$(this).removeClass('cross-henshin');
		$('.nav-menu').removeClass('active')
		$('.header').removeClass('hidden');
		$('html').css('overflow-y', 'visible');
		setTimeout(function() {
			$('.nav-menu .ef-gradient').removeClass('active');
		}, 500);
	}
});
function getScrollTop() {
    return document.documentElement.scrollTop
            || document.body.scrollTop
            || window.scrollY
            || window.pageYOffset;
  }
window.addEventListener('scroll', function() {
	if(getScrollTop() > $('.topTittle').outerHeight()) {
		$('#Backtop').addClass('active');
	} else {
		$('#Backtop').removeClass('active');
	}
	if(getScrollTop() > 0) {
		$('.header').addClass('active');
	}else{
		$('.header').removeClass('active');
	}
});
$('#Backtop').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 'slow');
})