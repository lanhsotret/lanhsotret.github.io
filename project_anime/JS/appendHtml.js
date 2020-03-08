const circleBottom = (function(){
    function append() {
        for(let i = 0; i < arguments.length; i++ ) {
            document.querySelectorAll(arguments[i]).forEach(particle=>{
                particle.innerHTML += `<section class="circle-bottom-js">
            <div class="circle-bottom-js__div"></div><div class="circle-bottom-js__div"></div><div class="circle-bottom-js__div"></div>
            </section>`;
            });
        }
    }

    return {append: append};
})();

circleBottom.append(".sideshow-popular__div", ".sideshow-favourite__div", ".sideshow-latest__div", ".sideshow-editorChoice__div", ".sideshow-filmSoon__div");

const translate_css = (function(){
    function change(ele,btn_forward, btn_backward, nameclass, index){
        let btn1_forward = document.querySelector(btn_forward);
        let btn2_forward = document.querySelector(btn_backward);
        let nameEle = document.querySelectorAll(ele);
        let count = 1;
        console.log(btn1_forward);
        btn1_forward.addEventListener("click",()=>{
            count++;
            count > index? count = 1: "";
            nameEle.forEach(particle=>{
                particle.classList.remove(`${nameclass}-${count == 1? index: count - 1}`);
                particle.classList.add(`${nameclass}-${count}`);
                console.log(1);
            });
        });
        btn2_forward.addEventListener("click",()=>{
            count--;
            count < 1? count = index: "";
            nameEle.forEach(particle=>{
                particle.classList.remove(`${nameclass}-${count == index? 1: count + 1}`);
                particle.classList.add(`${nameclass}-${count}`);
                console.log(1);
            });
        });
    }
    return {change: change};
})();
translate_css.change('.sideshow-popular__div','.sideshow-popular__button.div-button__bt1', '.sideshow-popular__button.div-button__bt2', "translate-JS", 3);

const translate_js = (function(){
    function animation(ele, btn1, btn2, num) {
        let eleTarget = document.querySelectorAll(ele);
        let parentTarget = eleTarget[0].parentElement;
        let WidthParent = parentTarget.offsetWidth;
        let scrollParent = parentTarget.scrollWidth;
        let widthTranslate = 0;
        for(let i = 0; i < num; i++) {
            let targetStyle = getComputedStyle(eleTarget[i]);
            let marginTarget = parseFloat(targetStyle.marginRight);
            widthTranslate += eleTarget[i].offsetWidth + marginTarget * 2;
        };
        let StyleSheet = document.createElement('style');
        document.head.appendChild(StyleSheet);
        let forwardTarget = document.querySelector(btn1);
        let backwardTarget = document.querySelector(btn2);
        let maxCount = Math.round(scrollParent / widthTranslate) - Math.round(WidthParent / widthTranslate);
        let count = 0;
        forwardTarget.addEventListener("click", ()=>{
            count++;
            count > maxCount? count = 0: "";
            eleTarget.forEach(particle=>{
                particle.style.transform = `translate(-${widthTranslate * count}px)`
            });
        });
        backwardTarget.addEventListener("click", ()=>{
            count--;
            widthTranslate * count < 0? count = maxCount: "";
            eleTarget.forEach(particle=>{
                particle.style.transform = `translate(-${widthTranslate * count}px)`
            });
        });
    };
    return {animation: animation};
})();

// translate_js.animation('.sideshow-popular__div','.sideshow-popular__button.div-button__bt1', '.sideshow-popular__button.div-button__bt2', 2);
