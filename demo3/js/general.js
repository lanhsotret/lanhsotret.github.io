$(function(){
	$(window).on('load scroll',function() {
		if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
			$('.footer__backtotop').css('opacity', '1');
		} else {
			$('.footer__backtotop').css('opacity', '0');
		}
		scrollToElement('.founding', 'odometer_1');
		scrollToElement('.company', 'odometer_2');
		scrollToElement('.employee', 'odometer_3');
		if(document.querySelector('.odometer_1'))
		{
			var odometer1 = document.querySelector('.odometer_1');
			var num1= 67;
			od1 = new Odometer({
				el: odometer1,
				value: 1,
			});
			od1.update(num1);
		}
		if(document.querySelector('.odometer_2'))
		{
			var odometer2 = document.querySelector('.odometer_2');
			var num2= 000;
			od2 = new Odometer({
				el: odometer2,
				minIntegerLen: 3,
				value: 111,
			});
			od2.update(num2);
		}
		if(document.querySelector('.odometer_3'))
		{
			var odometer3 = document.querySelector('.odometer_3');
			var num3= 139;
			od3 = new Odometer({
				el: odometer3,
				value: 10,
			});
			od3.update(num3);
		}
	});
	function scrollToElement(classFirst, nameClassAdd) {
		$(classFirst).each(function() {
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
				$(this).children(0).children(0).addClass(nameClassAdd);
			}
		});
	}


	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	})

        
});