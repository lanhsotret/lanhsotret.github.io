let AppendEle = (function () {
    function ObjectFn(EleParent, objectParent, objectChildd, Name, value) {
        var j = value;
        var SetEle = document.getElementsByClassName(EleParent);
        for (var i = 0; i < SetEle.length; i++) {
            var textHTML = SetEle[i].innerHTML;
            var SvgResult = objectParent[objectChildd][j][Name];
            SetEle[i].innerHTML = `${SvgResult}${textHTML}`;
            j++;
        }
    }
    function arrayfn(objectParent, ChildObject, Ele) {
        objectParent[ChildObject].forEach((particle, index) => {
            var elecre = document.createElement("DIV");
            var eleTarget = document.querySelector(Ele);
            eleTarget.appendChild(elecre);
            var eleImage = eleTarget.getElementsByTagName("DIV")[index];
            eleImage.setAttribute("class", "js-onePuch-div");
            eleImage.style.backgroundImage = `url(${particle})`;
            index === (objectParent[ChildObject].length - 1) ? eleImage.style.marginRight = `0px` : "";
        });
    }
    function ImageFn(ele) {
        var EleTarget = document.querySelectorAll(ele);
        EleTarget.forEach((partical, index) => {
            partical.style.backgroundImage = `url(${linkImage["onePunchMan"][index]})`;
        });
    }
    function IconFn(ele, value) {
        var eleTarget = document.querySelector(ele)|| document.getElementById(ele);
        eleTarget.innerHTML = `${value} ${eleTarget.innerHTML}`;
    }
    return {
        Object: ObjectFn,
        LinkImage: arrayfn,
        Image: ImageFn,
        IconFn: IconFn
    }
})();
AppendEle.Object("js-Nav-Icon-a", svg, 'social', 'Tags', 0);
AppendEle.Object("js-Svg-Icon-Head", svg, 'Icon_Items', 'Tags', 0);
AppendEle.Object("js-onePuch-Icon", svg, 'Icon_Items', 'Tags', 6);
AppendEle.Image('.onePuch-div-flex div');
AppendEle.IconFn('.form > button', svg['symbol'][0].Tags);
AppendEle.IconFn('.address-div1', svg['symbol'][1].Tags);
AppendEle.IconFn('.address-div2', svg['symbol'][2].Tags);
AppendEle.IconFn('.address-div3', svg['symbol'][3].Tags);
AppendEle.IconFn('.menuAside-div1', svg['symbol'][4].Tags);
AppendEle.IconFn('.menuAside-div2', svg['symbol'][5].Tags);
AppendEle.IconFn('.menuAside-div3', svg['symbol'][6].Tags);
AppendEle.IconFn('previousPage', svg['symbol'][7].Tags);
AppendEle.IconFn('nextPage', svg['symbol'][7].Tags);
let setOptional = (function () {
    function setWidthFn(eleparent, elechild, rate) {
        var domParent = document.querySelector(eleparent);
        var domchild = domParent.querySelectorAll(elechild);
        var WidthParent = 0;
        domchild.forEach(particle => {
            var composeStyle = window.getComputedStyle(particle);
            var gapFlex = parseFloat(composeStyle.marginRight);
            particle.style.width = `${domParent.offsetWidth * rate}px`;
            WidthParent = gapFlex + domParent.offsetWidth * rate + WidthParent;
        });
        domParent.style.width = `${WidthParent}px`;
    }
    return {
        setWidth: setWidthFn
    }
})();

// setOptional.setWidth(".onePuch-figure-1", ".js-onePuch-div", 0.45);


let event3Fn = (function () {
    function EventButton(button1, button2, ele) {
        var target1 = document.getElementsByClassName(button1)[0];
        var target2 = document.getElementsByClassName(button2)[0];
        var EleTarget = document.getElementsByClassName(ele)[0];
        // var EleParent = EleTarget.parentElement;
        var EleChild = EleTarget.children;
        var composeStyle = window.getComputedStyle(EleChild[0].children[0]);
        var scroll = window.innerWidth - document.documentElement.clientWidth;
        var margin = composeStyle.marginRight != "0px" ? composeStyle.marginRight : "15px";
        EleTarget.style.transform = `translateX(calc(0px - (100vw - ${margin} - ${scroll}px)))`;
        [...EleChild].forEach((particle,index)=>{
            particle.style.width = `calc(100vw - ${parseFloat(margin)*2}px - ${scroll}px)`;
            particle.style.transform = `translate(calc(${index}*calc(100vw - ${margin} - ${scroll}px)), -50%)`;
        });
        target1.addEventListener('click', () => {
            target1.disabled = true;
            var count = EleChild[EleChild.length - 1].childElementCount;
            var AttrTarget = EleChild[EleChild.length - 1].children[count - 1].style.backgroundImage;
            var lenghtext = AttrTarget.substring(5, AttrTarget.length - 2);
            var num = linkImage['onePunchMan'].indexOf(lenghtext);
            var cloneEle = EleChild[EleChild.length - 1].cloneNode(true);
            [...EleChild].forEach((particle,index)=>{
                particle.style.transition = `transform 1.5s ease`;
                particle.style.transform = `translate(calc(${index}*calc(100vw - ${margin} - ${scroll}px) - calc(100vw - ${margin} - ${scroll}px)), -50%)`;
            });
            EleTarget.appendChild(cloneEle);
            var num1 = 0;
            [...cloneEle.children].forEach((partical, index) => { //Array.from(cloneEle.children)
                if ((num + index + 1) <= (linkImage.onePunchMan.length - 1))
                    partical.style.backgroundImage = `url(${linkImage["onePunchMan"][num + index + 1]})`;
                else
                    partical.style.backgroundImage = `url(${linkImage["onePunchMan"][num1++]})`;
            })
            EleChild[0].remove();
            EleChild[0].addEventListener('transitionend', function () {
                target1.disabled = false;
            });
        });
        target2.addEventListener('click', () => {
            target2.disabled = true;
            var count = EleChild[0].childElementCount;
            var AttrTarget = EleChild[0].children[0].style.backgroundImage;
            var lenghtext = AttrTarget.substring(5, AttrTarget.length - 2);
            var num = linkImage['onePunchMan'].indexOf(lenghtext);
            var cloneEle = EleChild[0].cloneNode(true);
                [...EleChild].forEach((particle,index)=>{
                    particle.style.transition = `transform 1.5s ease`;
                    particle.style.transform = `translate(calc(${index + 1}*calc(100vw - ${margin} - ${scroll}px)), -50%)`;
                });
            EleTarget.insertBefore(cloneEle, EleTarget.childNodes[0]);
            [...cloneEle.children].forEach((partical, index) => { //Array.from(cloneEle.children)
                if (num >= count){
                    partical.style.backgroundImage = `url(${linkImage["onePunchMan"][num - count + index]})`;
                }else{
                    var value = linkImage.onePunchMan.length - count + num + index;
                    partical.style.backgroundImage = `url(${linkImage["onePunchMan"][value <= linkImage.onePunchMan.length - 1? value: 0]})`;
                }
            });
            EleChild[EleChild.length - 1].remove();
            EleChild[1].addEventListener('transitionend', function () {
                target2.disabled = false;
            });
        });
    }
    return {
        EventButton: EventButton
    }
})();
event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');