$(function () {
    // $(".faq-box__block-qa p.ans").slideUp(0);
    // $(".faq-box__block-qa.expand p.ans").slideDown();
    // $(".faq-box__block-qa").on("click",function(){
    // 	let h = $(this).children("p:first-child").innerHeight(),
    // 		hm = $(this).children("p.ans").innerHeight();
    // 	if($(this).is(".expand")){
    // 		$(this).removeClass("expand");
    // 		$(this).height(h);
    // 	}else{
    // 		$(this).addClass("expand");
    // 		$(this).height(h + hm + 30);
    // 	}
    // });

    $('.faq-box__block-qa').find('.ans').slideUp();
    $('.faq-box__block-qa.expand').find('.ans').slideDown();
    $('.faq-box__block-qa').on('click', function () {
        var _ = $(this);
        if (_.hasClass('expand')) {
            _.removeClass('expand');
            _.find('.ans').slideUp(300);
            return 0;
        }
        _.addClass('expand');
        _.find('.ans').slideDown(300);
    });


});