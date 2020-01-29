const main = document.getElementsByClassName("container")[0];
const table = document.getElementsByClassName("tableChar")[0];
const sectionOpunch = document.getElementsByClassName("onePuch")[0];

function ContentShort() {
 	let i = 0;
 	while (i < 6) {
 		let MaxText = 100;
 		let ElementP = main.getElementsByTagName("P")[i];
 		let TextP = ElementP.innerHTML;
 		if(TextP.length > MaxText) {
 			for(MaxText += 1; ; MaxText++) {
 				var checkText = TextP.charAt(MaxText);
 				if(checkText === " ") {
 					ElementP.innerHTML = TextP.substring(0, MaxText + 1);
 					break;
 				}
 			}
 			let TextNow =ElementP.innerHTML;
 			let moreText = TextP.substring(TextNow.length - 1, TextP.length + 1);
 			let CrEleSpanMore = document.createElement("SPAN");
 			CrEleSpanMore.innerHTML = moreText;
 			ElementP.appendChild(CrEleSpanMore);
 			let spanShowHide = ElementP.getElementsByTagName("SPAN")[0];
 			spanShowHide.style.display = "none";
 			let CrEleSpanPoint = document.createElement("SPAN");
 			CrEleSpanPoint.innerHTML = "...";
 			ElementP.appendChild(CrEleSpanPoint);
 			let SpanPoint = ElementP.getElementsByTagName("SPAN")[1];
 			let CrEleSpan = document.createElement("SPAN");
 			CrEleSpan.innerHTML = "&#10012";
 			ElementP.appendChild(CrEleSpan);
 			let SpanButton = ElementP.getElementsByTagName("SPAN")[2];
 			SpanButton.setAttribute("class", "showHide")
 			let button = function showHide(){
 				if(spanShowHide.style.display == "none") {
 					ElementP.style.height = ElementP.offsetHeight + "px";
 					spanShowHide.style.display = "inline";
 					SpanButton.innerHTML = "&#9866";
 					SpanPoint.style.display = "none";

 				} else {
 					spanShowHide.style.display = "none";
 					SpanButton.innerHTML = "&#10012";
 					SpanPoint.style.display = "inline";
 					ElementP.style.height = "initial";
 				}
 			}
 			ElementP.getElementsByTagName("SPAN")[2].addEventListener("click", button);
 		}
 		i++;
 	}
}

ContentShort();

const Divcontent = sectionOpunch.getElementsByTagName("DIV")[2];
const DivReadMore = document.getElementById("readMore");
const SpanreadMore = DivReadMore.getElementsByTagName("SPAN")[0];
function resizeBr() {
	let i = 0;
	let ArrayImage = [];
	let ArrayImgOpuch = [];
	while (i < 6) {
		let image = main.getElementsByClassName("img")[i];
		let HeightImage = image.clientHeight;
		ArrayImage.push(HeightImage);
		i++;
	}

	MinHeightImage = Math.min(...ArrayImage);

	for (var j = 0; j < 6; j++){
		let figure = main.getElementsByTagName("FIGURE")[j];
		figure.style.height = MinHeightImage + "px";
	}
	for (var a = 0; a < 3; a++) {
		let thImage = table.getElementsByClassName("img")[a];
		let thImageWith = thImage.clientWidth;
		thImage.style.height = (thImageWith * 7 / 15) + "px";
	}
	for (var t = 0; t < 2; t++) {
		let ImgOpunch = sectionOpunch.getElementsByClassName("imgOpuch")[t];
		let OpunchImgHght = ImgOpunch.clientHeight;
		ArrayImgOpuch.push(OpunchImgHght);
	}
	MinImgOpuch = Math.min(...ArrayImgOpuch);
	for (var x = 0; x < 2; x++) {
		let DivOpunch = sectionOpunch.getElementsByTagName("DIV")[x];
		DivOpunch.style.height = MinImgOpuch + "px";
	}
	
	if(Divcontent.clientHeight > MinImgOpuch) {
		Divcontent.style.height = MinImgOpuch + "px";
		DivReadMore.style.display = "block";
	} else {
		Divcontent.style.height = "initial";
		DivReadMore.style.display = "none";
	}
}
resizeBr();
function readMore() {
	Divcontent.style.height = "initial";
	DivReadMore.style.display = "none";
}
SpanreadMore.addEventListener('click', readMore);
const primarily = document.getElementsByClassName("primarily")[0];
window.onresize = resizeBr;


for (let i = 0; i < 6; i++) {
	let h3 = main.getElementsByTagName("H3")[i];
	let spanElement = h3.getElementsByTagName("SPAN")[0];
	function onmouseOver() {
		if(spanElement.offsetWidth > h3.offsetWidth) {
			let margin = spanElement.offsetWidth - h3.offsetWidth;
			spanElement.style.marginLeft = -margin + "px";
		}
	}
	function onleave() {
		spanElement.style.marginLeft = "initial";
	}
	h3.onmouseover = function() {onmouseOver()};
	h3.onmouseout = function() {onleave()};
}

// function PositionBody() {
// 	let body = document.getElementsByTagName("BODY")[0];
// 	let rect = body.getBoundingClientRect();
// 	let x = rect.top;
// 	let y = rect.left;
// 	console.log(`left: ${x}, top: ${y}`)''
// }
