$(function(){
	function smoothRoll(classFirst) {
		$(classFirst).each(function() {
			var delay = $(this).attr("data-delay");
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop + (chieucao / 2) < scrollSpaceTop + $(window).height())) {
				$(this).css({
					'opacity' : '1',
					'transform' : 'translate3d(0, 0, 0)',
				});
			}
		});
	}
	function smoothRollFromTop(classFirst) {
		$(classFirst).each(function() {
			var spaceTop = $(this).offset().top;
			var chieucao = $(this).height();
			var spaceBottom = $(document).height() - $(this).offset().top - chieucao;
			var scrollBottom = $(document).height() + $(window).height() - $(window).scrollTop();
			var scrollSpaceTop = $(window).scrollTop();
			if ((spaceBottom < scrollBottom - $(window).height()) && (spaceTop < scrollSpaceTop + $(window).height())) {
				$(this).css({
					'opacity' : '1',
					'transform' : 'translate3d(0, 0, 0)',
				});
			}
		});
	}
	function scrollToID(id){
        if($(id).offset().top > document.documentElement.scrollTop) {
            var temp = $(id).offset().top - document.documentElement.scrollTop;
            (temp > 2000)?(temp = temp / 3):'';
        } else {
            temp = document.documentElement.scrollTop - $(id).offset().top;
        }
        // var temp = $(id).offset().top
		$("html,body").animate({ 
			scrollTop: $(id).offset().top - ($('.header').height())
		}, temp);
		return false;
	}

	function scrollToID__small(id){
        if($(id).offset().top > document.documentElement.scrollTop) {
            var temp = $(id).offset().top - document.documentElement.scrollTop;
            (temp > 2000)?(temp = temp / 3):'';
        } else {
            temp = document.documentElement.scrollTop - $(id).offset().top;
        }
        // var temp = $(id).offset().top
		$("html,body").animate({ 
			scrollTop: $(id).offset().top - ($('.header').height() - 70)
		}, temp);
		return false;
	}

	
	$(window).on('load scroll',function() {
		smoothRoll('.smoothRoll');
		smoothRollFromTop('.fromWhere');
	});
	$('.internalLink').on('click', function(){
		scrollToID($(this).data('id'));
	});
	$('.internalLink__small').on('click', function(){
		scrollToID__small($(this).data('id'));
	});
});