$('.event_slider.slider_01').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
});

$('.event_slider.slider_02').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
});

inview.style.aniGroup01 = function(e,clear) {
  $(e).children().addClass("js_maskimg");
  // 
  setTimeout(() => {
      $(".message .message_img").css("visibility", "visible");
      $(".message .message_img").addClass("ani_img01");
  },200);
  setTimeout(() => {
      $(".message .message_txt").css("visibility", "visible");
      $(".message .message_txt").addClass("ani_move03");
  },400);
  if(clear) {
      $(".message .message_img, .message .message_txt").css("visibility", "visible");
      $(e).children().addClass("js_maskimg");
  }
}

let track = `
<div class="js_track_group">
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot no_show"><span></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
						<span class="js_track_foot"><span class="track" data-ani="track_ani"></span></span>
					</div>
`;
$.each($(".test"), function() {
 let html =  Array.from({length: $(this).data("length")}).map(() => track).join();
$(this).append(html);
})

let inviewTrack;
$( document ).ready(function() {
  inviewTrack = new inview.observer({
    class: "track",
    delay: 300,
    optionView: {bottom: -200}
    });
});

$(window).on('load',function(){
  inviewTrack.init();
})
