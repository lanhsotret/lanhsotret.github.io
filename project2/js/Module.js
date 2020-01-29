let AddEleModual = (function() {
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

let MinMax = (function() {
	let count = null;
	let getDom1 = null;
	let getDom2 = null;
	function minFn(ParentEle, condition, childEle, DomSet) {
		let setEle = ParentEle.getElementsByClassName(childEle)[0];
		let HeightMin = setEle.clientHeight;
		for(let i = 1; i < condition; i++) {
			let setEleNext = ParentEle.getElementsByClassName(childEle)[i++];
			let HeightImage = setEleNext.clientHeight; 
			HeightMin = (HeightMin >= HeightImage)? HeightImage : HeightMin;
		}
		count = HeightMin;
		ParentEle.querySelectorAll(DomSet).forEach(function(el) {
			el.style.height = HeightMin + "px";
		});
	}
	function minBoxFn(ParentEle, childEle1, childEle2, index) {
		getDom2 = document.getElementById(childEle1);
		getDom1 = ParentEle.getElementsByTagName(childEle2)[index];
		let check = (getDom1.clientHeight >= count);
		getDom1.style.height = check? count + "px" : "initial";
		getDom2.style.display = check? "block" : "none";
	}
	function readMoreFn(ParentEle, childDom) {
		let SpanreadMore = ParentEle.getElementsByTagName(childDom)[0];
		SpanreadMore.onclick = function() {
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