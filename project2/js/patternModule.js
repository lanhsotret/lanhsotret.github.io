const main = document.getElementsByClassName("container")[0];
const table = document.getElementsByClassName("tableChar")[0];
const sectionOpunch = document.getElementsByClassName("onePuch")[0];
const primarily = document.getElementsByClassName("primarily")[0];

let AddEleModual = (function () {
	function AddElementFn(NameCrEl, Addcontent, EleParent, Num) {
		let VarCrEl = document.createElement(NameCrEl);
		VarCrEl.innerHTML = Addcontent;
		EleParent.appendChild(VarCrEl);
		return EleParent.getElementsByTagName(NameCrEl)[Num];
	}
	return {
		AddElement: AddElementFn
	}
})();

let MinMax = (function () {
	let count = null;
	let getDom1 = null;
	let getDom2 = null;
	function minFn(ParentEle, condition, childEle, DomSet) {
		let setEle = ParentEle.getElementsByClassName(childEle)[0];
		let HeightMin = setEle.clientHeight;
		for (let i = 1; i < condition; i++) {
			let setEleNext = ParentEle.getElementsByClassName(childEle)[i++];
			let HeightImage = setEleNext.clientHeight;
			HeightMin = (HeightMin >= HeightImage) ? HeightImage : HeightMin;
		}
		count = HeightMin;
		ParentEle.querySelectorAll(DomSet).forEach(function (el) {
			el.style.height = HeightMin + "px";
		});
	}
	function minBoxFn(ParentEle, childEle1, childEle2, index) {
		getDom2 = document.getElementById(childEle1);
		getDom1 = ParentEle.getElementsByTagName(childEle2)[index];
		let check = (getDom1.clientHeight >= count);
		getDom1.style.height = check ? count + "px" : "initial";
		getDom2.style.display = check ? "block" : "none";
	}
	function readMoreFn(ParentEle, childDom) {
		let SpanreadMore = ParentEle.getElementsByTagName(childDom)[0];
		SpanreadMore.onclick = function () {
			getDom1.style.height = "initial";
			getDom2.style.display = "none";
		}
	}
	function MaxThFn(condition, ParentEle, childDom) {
		for (var a = 0; a < condition; a++) {
			let thImage = ParentEle.getElementsByClassName(childDom)[a];
			let thImageWith = thImage.clientWidth;
			thImage.style.height = (thImageWith * 7 / 15) + "px";
		}
	}
	return {
		min: minFn,
		minBox: minBoxFn,
		readMore: readMoreFn,
		MaxTh: MaxThFn
	}
})();
// let resizeBr = (function() {
// 	function resizeFn(observerEle) {
// 		let HeightEle = observerEle.offsetHeight;
// 		()
// 	}
// })();

function ContentShort() {
	let i = 0;
	while (i < 6) {
		let MaxText = 100;
		let ElementP = main.getElementsByTagName("P")[i];
		let TextP = ElementP.innerHTML;
		if (TextP.length > MaxText) {
			for (MaxText += 1; ; MaxText++) {
				var checkText = TextP.charAt(MaxText);
				if (checkText === " ") {
					ElementP.innerHTML = TextP.substring(0, MaxText + 1);
					break;
				}
			}
			let TextNow = ElementP.innerHTML;
			let moreText = TextP.substring(TextNow.length - 1, TextP.length + 1);
			let spanShowHide = AddEleModual.AddElement("SPAN", moreText, ElementP, 0);
			let SpanPoint = AddEleModual.AddElement("SPAN", "...", ElementP, 1);
			let SpanButton = AddEleModual.AddElement("SPAN", "&#10012", ElementP, 2);
			SpanButton.setAttribute("class", "showHide")
			spanShowHide.style.display = "none";
			let button = function showHide() {
				let check = spanShowHide.style.display === "none";
				ElementP.style.height = check ? ElementP.offsetHeight + "px" : "initial";
				spanShowHide.style.display = check ? "inline" : "none";
				SpanButton.innerHTML = check ? "&#9866" : "&#10012";
				SpanPoint.style.display = check ? "none" : "inline";
			}
			SpanButton.addEventListener("click", button);
		}
		i++;
	}
}
ContentShort();
const Divcontent = sectionOpunch.getElementsByTagName("DIV")[2];
const DivReadMore = document.getElementById("readMore");
const SpanreadMore = DivReadMore.getElementsByTagName("SPAN")[0];
// function resizeBr() {
// 	if(Divcontent.clientHeight > MinImgOpuch) {
// 		MinImgOpuch
// 		Divcontent.style.height = MinImgOpuch + "px";
// 		DivReadMore.style.display = "block";
// 	} else {
// 		Divcontent.style.height = "initial";
// 		DivReadMore.style.display = "none";
// 	}
// }
// resizeBr();
// function readMore() {
// 	Divcontent.style.height = "initial";
// 	DivReadMore.style.display = "none";
// }
// SpanreadMore.addEventListener('click', readMore);
// window.onresize = resizeBr;


for (let i = 0; i < 6; i++) {
	let h3 = main.getElementsByTagName("H3")[i];
	let spanElement = h3.getElementsByTagName("SPAN")[0];
	function onmouseOver() {
		if (spanElement.offsetWidth > h3.offsetWidth) {
			let margin = spanElement.offsetWidth - h3.offsetWidth;
			spanElement.style.marginLeft = -margin + "px";
		}
	}
	function onleave() {
		spanElement.style.marginLeft = "initial";
	}
	h3.onmouseover = function () { onmouseOver() };
	h3.onmouseout = function () { onleave() };
}

//modify <figure class="onePuch-figure-1">


let sideShow1 = (function () {
	function showImageFn(eleName, eleparent) {
		var ele = document.querySelectorAll(eleName);
		var parent = ele[0].closest(eleparent);
		window.setTimeout(function () {
			parent.style.height = `${parent.offsetHeight}px`;
			var css = window.getComputedStyle(ele[0]);
			var width = parseFloat(ele[0].style.width);
			var value = css.paddingTop;
			ele.forEach((dom, index) => {
				dom.addEventListener('mouseover', function () {
					dom.style.width = `${width * 110 / 100}px`;
					for (var i = 0; i < ele.length; i++) {
						if (i == index) { continue; }
						ele[i].style.paddingTop = `${parseFloat(value) * 95 / 100}px`;
					}
				});
				dom.addEventListener('mouseout', () => {
					dom.style.width = `${width}px`;
					for (var i = 0; i < ele.length; i++) {
						if (i == index) { continue; }
						ele[i].style.paddingTop = value;
					}
				});
			});
		}, 800);
	}
	return {
		ShowImage: showImageFn
	}
})();

// sideShow1.ShowImage(".js-onePuch-div", "figure");



//modify sideshow image

let ShowTime = (function () {
	function ImageFn(Ele, button1, button2) {
		window.setTimeout(() => {
			var parent = document.querySelector(Ele);
			var image = parent.querySelectorAll('div');
			var next = document.getElementsByClassName(button1)[0];
			var previous = document.getElementsByClassName(button2)[0];
			var composeStyle = window.getComputedStyle(image[0]);
			var padding = parseFloat(composeStyle.marginRight);
			var widEle = (image[0].offsetWidth + padding) * 2 - (parent.offsetWidth - ((image[0].offsetWidth + padding) * 2)) / 2 - padding / 2;
			var numImg = 0;
			function conditionFn() {
				if (numImg <= 0) {
					previous.style.backgroundImage = `linear-gradient(to left, rgba(192,192,192 ,0), rgba(192,192,192 ,1))`;
					previous.querySelector("path").style.fill = `silver`;
					numImg = 0;
				} else {
					previous.style.backgroundImage = `linear-gradient(to left,  rgba(255,255,255 ,0), rgba(255,255,255  ,1))`;
					previous.querySelector("path").style.fill = `rgba(30,144,255 ,1)`;
				}
				if (numImg >= image.length - 2) {
					next.style.backgroundImage = `linear-gradient(to right, rgba(192,192,192 ,0), rgba(192,192,192 ,1))`;
					next.querySelector("path").style.fill = `silver`;
					numImg = image.length - 1;
				} else {
					next.style.backgroundImage = `linear-gradient(to right, rgba(255,255,255 ,0), rgba(255,255,255  ,1))`;
					next.querySelector("path").style.fill = `rgba(30,144,255 ,1)`;
				}
			}
			conditionFn();
			var a = (parent.offsetWidth - ((image[0].offsetWidth + padding) * 2)) / 2 + padding / 2;
			next.addEventListener('click', () => {
				numImg === 0 ? parent.scrollLeft += widEle : parent.scrollLeft += (widEle + a);
				numImg += 2;
				conditionFn();
			});
			previous.addEventListener('click', () => {
				(numImg >= image.length - 2) ? parent.scrollLeft -= widEle : parent.scrollLeft -= (widEle + a);
				numImg -= 2;
				conditionFn();
			});
		}, 850)
	}
	return { ImageNx: ImageFn }
})();

// ShowTime.ImageNx(".onePuch-div-flex", "onePuch-span2", "onePuch-span1");