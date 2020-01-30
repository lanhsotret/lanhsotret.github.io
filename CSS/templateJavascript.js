
function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/iphone/i)
        || navigator.userAgent.match(/ipad/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
};

$(window).on('load', function () {
    let AddSvg = $('.cont2Svg').eq(0).html();
    $('.cont2Svg').eq(1).html(AddSvg + AddSvg);
    $('.cont2Svg').eq(2).html(AddSvg + AddSvg + AddSvg);
    $('.cont2Svg').eq(3).html(AddSvg + AddSvg + AddSvg);
    DataWeb["linkImg"].forEach((partical, index) => {
        $('.js-cont6-background').eq(index).css('background-image', `url(${partical})`);
    });
    DataWeb.social.forEach((partical, index) => {
        $('main.footer-main1 abbr').eq(index).html(partical["Tags"]);
    });
    $('nav.NavHeader > div').last().html(icon2['Tags']);
    $(`<div class="js-footer-main1-icon">${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}${DataWeb["Icon"][0]["Tags"]}</div>`).insertBefore('main.footer-main1 > p');
    let showBar = (function(){
        let checkColor = $('#NavHeader-Svg svg path').css('fill');
        $('#NavHeader-Svg').click(function(){
            if($('#NavHeader-Svg svg path').css('fill') === checkColor) {
                $('#NavHeader-Svg svg path').first().css('opacity', '0');
                $('#NavHeader-Svg svg path').last().css('opacity', '0');
                $('#NavHeader-Svg svg path').eq(1).clone().insertBefore('#NavHeader-Svg svg path:last-child');
                $('#NavHeader-Svg svg path').eq(1).css({'transform': 'rotate(45deg)','transform-origin': 'center center'});
                $('#NavHeader-Svg svg path').eq(2).css({'transform': 'rotate(-45deg)','transform-origin': 'center center'});
                $('#header-navBar-Hide').css('transform', 'translateX(0%)');
                $('#NavHeader-Svg svg path').css('fill','red');
            }else{
                $('#NavHeader-Svg svg path').css('fill', checkColor);
                $('#NavHeader-Svg svg path').first().css('opacity', '1');
                $('#NavHeader-Svg svg path').last().css('opacity', '1');
                $('#NavHeader-Svg svg path').eq(1).css({'transform': 'rotate(0deg)','transform-origin': 'center center'});
                $('#NavHeader-Svg svg path').eq(2).css({'transform': 'rotate(0deg)','transform-origin': 'center center'});
                $('#NavHeader-Svg svg path').eq(2).remove();
                $('#header-navBar-Hide').css('transform', 'translateX(100%)');
            }
        });
    })();
    


    let animation = (function () {
        let callFn = function(value) {
            setTimeout(value, 2000);
        }
        function animeFn(param1) {
            $(param1).each((index) => {
                function addTrans() {
                    let OffsetParent = $(param1).parent().outerWidth();
                    let widthTarget = $(param1).get(index).scrollWidth;
                    if (widthTarget > OffsetParent) {
                        $(param1).eq(index).css({ 'transition': 'transform 2s ease', 'transition-delay': `${index * 0.1}s`, 'transform': `translateX(${OffsetParent - widthTarget}px)` });
                        let num1 = 0;
                        let num2 = 0;
                        $(param1).get(index).addEventListener("transitionend", function () {
                            num1++;
                            if(num1 === 1) {
                                $(this).css('transform', 'translateX(0px)')
                                this.addEventListener('transitionend', function(){
                                    num2++;
                                    if(num2 === 1) {
                                        callFn(addTrans);
                                    }
                                });
                            }
                        });
                    } else
                        clearTimeout(callFn);
                }
                addTrans();
            });
        }
        return { animeFn: animeFn };
    })();
    // animation.animeFn('section.cont4Child > p');
    // animation.animeFn('div.DishNew h3');
    // animation.animeFn('main.content3 > div p');
    // animation.animeFn('div.WrapFood h3');

    let mediaJs = (function(){
        function mediaFn(param1) {
            let media = window.matchMedia(`(max-width: ${param1})`);
            function matchesFn(x) {
                if(x.matches && detectmob()) {
                    animation.animeFn('section.cont4Child > p');
                    animation.animeFn('div.DishNew h3');
                    animation.animeFn('main.content3 > div p');
                    animation.animeFn('div.WrapFood h3');
                }
            }
            matchesFn(media);
            let EventFn = media.addListener(matchesFn);
        }
        return {mediaFn:mediaFn};
    })();
    mediaJs.mediaFn('650px');
    mediaJs.mediaFn('550px');
});
