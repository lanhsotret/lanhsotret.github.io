$(window).on("load resize",function(){
    $(".interview_sec_img").each(function() {
        if($(window).width() < 768){
        $(this).parent().find(".interview_sec_wrap_ttl").prepend(this);
        }
    });
})