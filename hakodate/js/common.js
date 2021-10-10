!function() {
    function o() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    $(".blockShow-slick").get(0) && $(".blockShow-slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !1,
        dots: !0,
        pauseOnHover: !1
    });
    var t = o();
    function e() {
        $("body").removeClass("fixed").css("top", "auto"), window.scrollTo(0, t);
    }
    function i() {
        var o = $(".header").outerHeight() + "px";
        $(".main").not(".topPage").css("margin-top", o);
    }
    $(".navSp-btn").on("click", (function() {
        $(this).is(".active") ? ($(this).removeClass("active"), $(this).next().html("MENU"), 
        $(this).parent().prev().removeClass("active"), e()) : ($(this).addClass("active"), 
        $(this).next().html("CLOSE"), $(this).parent().prev().addClass("active"), t = o(), 
        $("body").addClass("fixed").css("top", -t + "px"));
    })), i(), $("#toTop").on("click", (function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    }));
    var s = window.innerHeight, n = $(".footer").offset().top;
    $("img").on("load", (function() {
        n = $(".footer").offset().top;
    })), window.addEventListener("resize", (function() {
        i(), s = window.innerHeight, n = $(".footer").offset().top, window.innerWidth >= 1024 && $("body").is(".fixed") && ($(".navSp-btn").removeClass("active"), 
        $(".navSp-btn").next().html("MENU"), $(".navSp").removeClass("active"), e());
    })), window.addEventListener("scroll", (function() {
        var t = $(".MvTop-slick").outerHeight() || $(".c-maivisual").outerHeight() || window.innerHeight / 2;
        o() >= t ? $(".toTop").addClass("visible") : $(".toTop").removeClass("visible"), 
        o() + s > n ? $(".toTop").css("bottom", o() + s - n + "px") : $(".toTop").css("bottom", "0px");
    }));
}();