const circleBottom = (function() {
  function append() {
    for (let i = 0; i < arguments.length; i++) {
      document.querySelectorAll(arguments[i]).forEach(particle => {
        particle.innerHTML += `<section class="circle-bottom-js">
            <div class="circle-bottom-js__div"></div><div class="circle-bottom-js__div"></div><div class="circle-bottom-js__div"></div>
            </section>`;
      });
    }
  }

  return { append: append };
})();

circleBottom.append(
  ".sideshow-popular__div",
  ".sideshow-favourite__div",
  ".sideshow-latest__div",
  ".sideshow-editorChoice__div",
  ".sideshow-filmSoon__div"
);

const translate_css = (function() {
  function change(ele, btn_forward, btn_backward, nameclass, index) {
    let btn1_forward = document.querySelector(btn_forward);
    let btn2_forward = document.querySelector(btn_backward);
    let nameEle = document.querySelectorAll(ele);
    let count = 1;
    console.log(btn1_forward);
    btn1_forward.addEventListener("click", () => {
      count++;
      count > index ? (count = 1) : "";
      nameEle.forEach(particle => {
        particle.classList.remove(
          `${nameclass}-${count == 1 ? index : count - 1}`
        );
        particle.classList.add(`${nameclass}-${count}`);
        console.log(1);
      });
    });
    btn2_forward.addEventListener("click", () => {
      count--;
      count < 1 ? (count = index) : "";
      nameEle.forEach(particle => {
        particle.classList.remove(
          `${nameclass}-${count == index ? 1 : count + 1}`
        );
        particle.classList.add(`${nameclass}-${count}`);
        console.log(1);
      });
    });
  }
  return { change: change };
})();
translate_css.change(
  ".sideshow-popular__div",
  ".sideshow-popular__button.div-button__bt1",
  ".sideshow-popular__button.div-button__bt2",
  "translate-JS",
  3
);

const translate_js = (function() {
  function animation(ele, btn1, btn2, num) {
    let eleTarget = document.querySelectorAll(ele);
    let parentTarget = eleTarget[0].parentElement;
    let WidthParent = parentTarget.offsetWidth;
    let scrollParent = parentTarget.scrollWidth;
    let widthTranslate = 0;
    for (let i = 0; i < num; i++) {
      let targetStyle = getComputedStyle(eleTarget[i]);
      let marginTarget = parseFloat(targetStyle.marginRight);
      widthTranslate += eleTarget[i].offsetWidth + marginTarget * 2;
    }
    let StyleSheet = document.createElement("style");
    document.head.appendChild(StyleSheet);
    let forwardTarget = document.querySelector(btn1);
    let backwardTarget = document.querySelector(btn2);
    let maxCount =
      Math.round(scrollParent / widthTranslate) -
      Math.round(WidthParent / widthTranslate);
    let count = 0;
    forwardTarget.addEventListener("click", () => {
      count++;
      count > maxCount ? (count = 0) : "";
      eleTarget.forEach(particle => {
        particle.style.transform = `translate(-${widthTranslate * count}px)`;
      });
    });
    backwardTarget.addEventListener("click", () => {
      count--;
      widthTranslate * count < 0 ? (count = maxCount) : "";
      eleTarget.forEach(particle => {
        particle.style.transform = `translate(-${widthTranslate * count}px)`;
      });
    });
  }
  return { animation: animation };
})();

// translate_js.animation('.sideshow-popular__div','.sideshow-popular__button.div-button__bt1', '.sideshow-popular__button.div-button__bt2', 2);

class appendHTML {
  constructor(tagHTML, eleTarget, content, nameclass) {
    this._tagHTML = document.createElement(tagHTML);
    this._eleTarget = document.querySelector(eleTarget);
    this._content = content;
    this._nameClass = nameclass;
  }
  get tagHTML() {
    return this._tagHTML;
  }
  set modifier(newContent) {
    this._content = newContent;
  }
  apply() {
    this._tagHTML.classList.add(this._nameClass);
    this._tagHTML.innerHTML = this._content;
    this._eleTarget.appendChild(this._tagHTML);
  }
}

let genre = new appendHTML(
  "div",
  ".nav__div.nav__genre",
  "content",
  "nav__genre--slider"
);

genre.modifier = `<div class="div-genre">action</div>
    <div class="div-line"></div>
    <div class="div-genre">adventure</div>
    <div class="div-line"></div>
    <div class="div-genre">tragedy</div>
    <div class="div-line"></div>
    <div class="div-genre">history</div>
    <div class="div-line"></div>
    <div class="div-genre">horror</div>
    <div class="div-line"></div>
    <div class="div-genre">mystery</div>
    <div class="div-line"></div>
    <div class="div-genre">spsychology</div>
    <div class="div-line"></div>
    <div class="div-genre">cartoon</div>
    <div class="div-circle">
    <div></div><div></div><div></div><div></div><div></div>
    </div>`;

genre.apply();

appendHTML.prototype.event = function(callback1, callback2, eleTarget) {
  callback1(this._tagHTML, eleTarget);
  callback2(this._tagHTML, eleTarget);
};

const eventCallback = (function() {
  function click(ele, eleTarget) {
    let domTarget = document.querySelector(eleTarget);
    domTarget.addEventListener("click",()=>{
      if (ele.style.visibility == "visible") {
        ele.style.visibility = "hidden";
        ele.style.opacity = 0;
        domTarget.classList.remove("active");
      } else {
        ele.style.visibility = "visible";
        ele.style.opacity = 1;
        domTarget.classList.add("active");
      }
    });
  }
  function windowClick(ele, eleTarget){
    let domTarget = document.querySelector(eleTarget);
    window.addEventListener("click", (e)=>{
      if(!ele.contains(e.target) && !domTarget.contains(e.target)){
        ele.style.visibility = "hidden";
        ele.style.opacity = 0;
        domTarget.classList.remove("active");
      }
    });
  }
  return {
    click: click,
    clickOut: windowClick
  };
})();

genre.event(eventCallback.click, eventCallback.clickOut, ".nav__div.nav__genre");

let release = new appendHTML("div", "nav.nav", "content", "nav__release_js");
release.modifier = function(){
  let content = "";
  for(let i = 2000; i <= 2020; i++) {
    content += `<div>${i}</div>`;
  }
  return `<section class="nav__year-section">
      <span>year</span>
      <i class="fa fa-caret-left" aria-hidden="true"></i>
      <span>2000+</span>
      <i class="fa fa-caret-right" aria-hidden="true"></i>
    </section>
    <div class="nav__year-div">${content}</div>
    <div class="nav__year-circle">
      <div></div><div></div><div></div><div></div><div></div>
    </div>`
}();

release.apply();
release.event(eventCallback.click, eventCallback.clickOut, ".nav__div.nav__release");

let gallery = new appendHTML("div", "nav.nav", "content", "nav__setGallery");
gallery.modifier = `<div class="nav__gallery-div">
    <section class="nav__gallery-section gallery-romance">
      <div class="nav__img-div">
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
      </div>
      <div class="nav__gallery-line"></div>
      <div class="nav__gallery-title">romances</div>
    </section>
    <section class="nav__gallery-section gallery-war">
      <div class="nav__img-div">
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
      </div>
      <div class="nav__gallery-line"></div>
      <div class="nav__gallery-title">wars</div>
    </section>
    <section class="nav__gallery-section gallery-fantasy">
      <div class="nav__img-div">
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
        <figure class="nav__gallery-figure"></figure>
      </div>
      <div class="nav__gallery-line"></div>
      <div class="nav__gallery-title">fantasy</div>
    </section>
  </div>
  <div class="nav__gallery-circle">
      <div></div><div></div><div></div><div></div><div></div>
  </div>
  <a class="nav__gallery-a next-a"><span class="nav__gallery-span span-next"></span></a>
  <a class="nav__gallery-a previous-a"><span class="nav__gallery-span span-previous"></span></a>`

gallery.apply();
gallery.event(eventCallback.click, eventCallback.clickOut, ".nav__div.nav__gallery");

let news = new appendHTML("div", "nav.nav", "content", "nav__news-primary");
news.modifier = function(){
  let content = "";
  for(let key in newsData) {
    let tagContent = "";
    for(let index in newsData[key].img) {
      console.log(newsData[key].img[index]);
      tagContent += `<div class="nav__news-Abox ${key}-news${+index + 1}">
        <figure class="nav__news-figure" style="background-image: url('${newsData[key].img[index]}')"></figure>
        <div class="nav__news-boxTitle">
          <p class="nav__news-title">${newsData[key].title[index]}</p>
          <div class="nav__news-line"></div>
          <p class="nav__news-content">${newsData[key].content[index].substring(0, 100) + "..."}</p>
        </div>
      </div>`
    }
    content += `<section class="nav__news-section section-${key}">
      <div class="nav__news-name">${key}</div>
      <div class="nav__news-board newsboard-${key}">${tagContent}</div>
      <div class="nav__news-arrow arrowDown-div">
        <span class="nav__news-span arrowDown-span"></span>
      </div>
    </section>`
  }
  return `<div class="nav__news-child">${content}</div>
    <div class="nav__news-circle">
      <div></div><div></div><div></div><div></div><div></div>
    </div>`;
}();
news.apply();

const moveStyle = (function(){
  function translate(eleTarget, btn1) {
    let domTarget = document.querySelectorAll(eleTarget);
    let btn1Target = document.querySelector(btn1);
    let css = getComputedStyle(domTarget[0]);
    let widthMove = domTarget[0].clientHeight + parseInt(css.marginTop) * 2;
    let count = 0;
    btn1Target.addEventListener("click", ()=>{
      count--;
      count < 0? count = 2: "";
      domTarget[count].style.transform = `translateY(-${widthMove * (count + 1)}px)`;
      domTarget[count + 1 > 2? 0: count + 1].style.zIndex = 3;
      domTarget.forEach((particle,index)=>{
        index == (count + 1 > 2? 0: count + 1)? "": particle.style.zIndex = 0;
        let transStyle = particle.style.transform? parseInt(particle.style.transform.split("(")[1]): 0;
        particle.style.transform = `translateY(${transStyle + widthMove}px)`;
      });
    });
  };
  function translate2(nameEle, btn) {
    let eleTarget = document.querySelectorAll(nameEle);
    let btnTarget = document.querySelector(btn);
    let css = getComputedStyle(eleTarget[0]);
    let transMove = eleTarget[0].offsetHeight + parseInt(css.marginTop) * 2;
    console.log(transMove);
    eleTarget.forEach((particle,index)=>{
      particle.style.zIndex = 2 - index;
      if(index !== 0)
        particle.style.transform = `translateY(-${(index - 1) * transMove}px)`;
    });
    let count = 0;
    btnTarget.addEventListener("click", ()=>{
      let transStyle = eleTarget[count].style.transform? parseInt(eleTarget[count].style.transform.split("(")[1]): 0;
      eleTarget[count].style.transform = `translateY(${transStyle + transMove}px)`;
      eleTarget[count + 1 > 2? 0: count +1].style.transform = `translateY(${parseInt(eleTarget[count + 1 > 2? 0: count +1].style.transform.split("(")[1]) - transMove}px)`
      count++;
      count > 2? count = 0: "";
      eleTarget[count].addEventListener("transitionend", function myevent(e){
        e.currentTarget.style.zIndex = 2;
        eleTarget.forEach((particle,index)=>{
          if(index !== count){
            particle.style.zIndex = 0;
          }
        });
        e.currentTarget.removeEventListener("transitionend", myevent);
      });
    });
    
  }
  return {translate: translate,
    translate2: translate2
    };
})();

news.event(eventCallback.click, eventCallback.clickOut, ".nav__div.nav__news");
moveStyle.translate2(".section-anime .nav__news-Abox", ".section-anime .arrowDown-div");
moveStyle.translate2(".section-movie .nav__news-Abox", ".section-movie .arrowDown-div");
moveStyle.translate2(".section-Tvseries .nav__news-Abox", ".section-Tvseries .arrowDown-div");


