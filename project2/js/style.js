let intFn = (function () {
    function check(dom) {
        return (document.getElementsByClassName(dom)[0]) ? true: false;
    }
    function StyleFn(ele) {
        let EleTarget = document.getElementsByClassName(ele)[0];
        if (check(ele)) {
            let EleParent = EleTarget.parentElement;
            let EleChild = EleTarget.children;
            let composeStyle = window.getComputedStyle(EleChild[0].children[0]);
            let gap = composeStyle.marginRight;
            EleTarget.style.transform = `translateX(-${EleParent.offsetWidth + parseFloat(gap)}px)`;
            [...EleChild].forEach((particle, index) => {
                particle.style.width = `${EleParent.offset}px`;
                particle.style.transform = `translate(${index * (particle.offsetWidth + parseFloat(gap))}px, -50%)`;
            });
            window.clearInterval(int);
        }
    }
    return { StyleFn: StyleFn }
})();

// let int = setInterval(function () { intFn.StyleFn('onePuch-div-flex'); }, 5);


let mediaQuery = (function(){
    var limitMedia = window.matchMedia(`(max-width: 1100px)`);
    function checkMedia() {
        if(limitMedia.matches) {
            event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');
            // let eleTarget = document.querySelector('.onePuch-div-flex');
            // eleTarget.style.paddingTop = `55%`;
            // [...eleTarget.children].forEach((particle)=>{
            //     let elechild = particle.children;
            //     elechild[elechild.length - 1].remove();
            //     elechild[0].style.paddingTop = `55%`;
            // });
            // AppendEle.Image('.onePuch-div-flex div');
            // event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');
        // } else {
        //     let eleTarget = document.querySelector('.onePuch-div-flex');
        //     eleTarget.style.paddingTop = `25%`;
        //     [...eleTarget.children].forEach((particle)=>{
        //         let elechild = particle.children;
        //         let cloneEle = elechild[elechild.length - 1].cloneNode(true);
        //         particle.appendChild(cloneEle);
        //         elechild[0].style.paddingTop = `25%`;
        //         AppendEle.Image('.onePuch-div-flex div');
        //         event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');
        //     });
        } else {
            event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex', 250);
        }
        // if(limitMedia.matches) {
        //     let domTarget = document.querySelector('.OtherChar .section-div');
        //     [...domTarget.children].forEach((particle,index)=>{
        //         index !== 0 ? particle.remove():"";
        //     });
        // }
    }
    checkMedia();
    limitMedia.addListener(checkMedia);
})();
