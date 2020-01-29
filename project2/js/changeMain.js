$(function(){
	// limit content in box
	let MaxText = 100;
	let TextP = $('.container p').html();
	if(TextP.length > MaxText) {
	 	for(MaxText += 1; ; MaxText++) {
	 		if(TextP.charAt(MaxText) === " ") {
	 			$('.container p').html(TextP.substring(0, MaxText + 1));
	 			break;
	 			}
	 		}
		}

});