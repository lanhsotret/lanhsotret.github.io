
let device = (function () {
    function detectmob() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/iphone/i)
            || navigator.userAgent.match(/ipad/i)) {
            return true;
        } else {
            return false;
        }
    }
    return {detectmob:detectmob};
})();

let intFn = (function () {
    function check(dom) {
        return (document.getElementsByClassName(dom)[0]) ? true : false;
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


let mediaQuery = (function () {
    var limitMedia = window.matchMedia(`(max-width: 1100px)`);
    function checkMedia() {
        if (limitMedia.matches) {
            let eleTarget = document.querySelector('.onePuch-div-flex');
            let limit = window.matchMedia('(max-width: 600px)');
            // limit.addListener(checkMedia2);
            function checkMedia2() {
                if (limit.matches) {
                    eleTarget.style.paddingTop = `55%`;
                    [...eleTarget.children].forEach((particle) => {
                        let elechild = particle.children;
                        elechild[elechild.length - 1].remove();
                        elechild[0].style.paddingTop = `55%`;
                    });
                    event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');
                } else {
                    // eleTarget.style.paddingTop = `25%`;
                    // [...eleTarget.children].forEach(particle => {
                    //     let elechild = particle.children;
                    //     console.log(particle.childElementCount);
                    //     let cloneEle = elechild[particle.childElementCount - 1].cloneNode(true);
                    //     particle.appendChild(cloneEle);
                    //     console.log(elechild[particle.childElementCount - 1]);
                    // });
                    event3Fn.EventButton('onePuch-span1', 'onePuch-span2', 'onePuch-div-flex');
                }
            }
            checkMedia2();

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
    let c = limitMedia.addListener(checkMedia);
})();



let mobile = (function(){
    if(device.detectmob()) {
        let ele = document.querySelectorAll('main.container > div.content');
        let ele2 = document.querySelectorAll('main.container .showHide');
        let ele3 = document.querySelectorAll('main.container h3');
        // ele.forEach(particle=>{
        //     particle.classList.add('nohover');
        // });
        ele2.forEach(particle=>{
            particle.style.opacity = `1`;
            particle.style.transform = `scale(1)`;
        });
        ele3.forEach(particle=>{
            particle.style.overflowX = `auto`;
            particle.classList.add('hideScroll');
        });
        let ele4 = document.querySelector('div.section-div');
        let childEle4 = ele4.children;
        [...childEle4].forEach(particle=>{
            particle.style.minWidth = `100vw`;
        });
        ele4.classList.add('nohover');
        
    }
})();