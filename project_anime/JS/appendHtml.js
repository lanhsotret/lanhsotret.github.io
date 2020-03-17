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
  constructor(tagHTML, eleTarget, nameclass, content) {
    this._tagHTML = document.createElement(tagHTML);
    this._nameTag = tagHTML;
    this._eleTarget = document.querySelectorAll(eleTarget);
    this._nameClass = nameclass;
    this._content = function() {
      content(arguments[0], arguments[1], arguments[2]);
    };
  }
  get tagHTML() {
    return this._tagHTML;
  }
  set modifier(newContent) {
    this._content = newContent;
  }
  apply() {
    this._eleTarget.forEach((particle, index) => {
      let eleCreate = document.createElement(this._nameTag);
      eleCreate.className += this._nameClass;
      this._content(eleCreate, particle, index);
    });
  }
}
const ApplyContent = (function() {
  function genre(ele1, ele2) {
    ele1.innerHTML = `<div class="div-genre">action</div>
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
    ele2.appendChild(ele1);
  }
  function release(ele1, ele2) {
    let content = "";
    for (let i = 2000; i <= 2020; i++) {
      content += `<div>${i}</div>`;
    }
    ele1.innerHTML = `<section class="nav__year-section">
        <span>year</span>
        <i class="fa fa-caret-left" aria-hidden="true"></i>
        <span>2000+</span>
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </section>
      <div class="nav__year-div">${content}</div>
      <div class="nav__year-circle">
        <div></div><div></div><div></div><div></div><div></div>
      </div>`;
    ele2.appendChild(ele1);
  }
  function gallery(ele1, ele2) {
    ele1.innerHTML = `<div class="nav__gallery-div">
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
      <a class="nav__gallery-a previous-a"><span class="nav__gallery-span span-previous"></span></a>`;
    ele2.appendChild(ele1);
  }
  function news(ele1, ele2) {
    let content = "";
    for (let key in newsData) {
      let tagContent = "";
      for (let index in newsData[key].img) {
        tagContent += `<div class="nav__news-Abox ${key}-news${+index + 1}">
            <figure class="nav__news-figure" style="background-image: url('${
              newsData[key].img[index]
            }')"></figure>
            <div class="nav__news-boxTitle">
              <p class="nav__news-title">${newsData[key].title[index]}</p>
              <div class="nav__news-line"></div>
              <p class="nav__news-content">${newsData[key].content[
                index
              ].substring(0, 100) + "..."}</p>
            </div>
          </div>`;
      }
      content += `<section class="nav__news-section section-${key}">
          <div class="nav__news-name">${key}</div>
          <div class="nav__news-board newsboard-${key}">${tagContent}</div>
          <div class="nav__news-arrow arrowDown-div">
            <span class="nav__news-span arrowDown-span"></span>
          </div>
        </section>`;
    }
    ele1.innerHTML = `<div class="nav__news-child">${content}</div>
      <div class="nav__news-circle">
        <div></div><div></div><div></div><div></div><div></div>
      </div>`;
    ele2.appendChild(ele1);
  };
  function arrowLeft(ele1, ele2) {
    ele1.innerHTML = `<span class="sideshow-primary__span span-arrow__left"></span>`;
    ele2.appendChild(ele1);
  };
  function arrowRight(ele1, ele2) {
    ele1.innerHTML = `<span class="sideshow-primary__span span-arrow__right"></span>`;
    ele2.appendChild(ele1);
  };
  function ContentSideShow(ele1, ele2, index) {
    let key = Object.keys(contentSideshow)[index];
    ele1.innerHTML = `<h3 class="sideshow-primary__h3"><span>${contentSideshow[key].name}</span></h3>
    <div class="sideshow-primary__line"></div>
    <p class="sideshow-primary__p">${contentSideshow[key].content.substring(0, 130) + "..."}</p>`;
    ele2.appendChild(ele1);
  };
  function containMark(ele1, ele2) {
    let key = Object.keys(contentSideshow).length;
    for(let i = 0; i < key; i++) {
      if(i === 0)
        ele1.innerHTML += `<div class="active"></div>`;
      else
        ele1.innerHTML += `<div></div>`;
    }
    ele2.appendChild(ele1);
  };
  function vendor(ele1, ele2) {
    ele1.innerHTML = `<div class="panel-list__status">
          <i class="fa fa-heart" aria-hidden="true"></i>
          <span class="panel-list__ep">12/12</span>
        </div>
        <div class="panel-list__tag">
          <i class="fa fa-tags" aria-hidden="true"></i>
          <span class="panel-list__genre">action, adventure, mecha</span>
        </div>
      <div class="panel-list__play"></div>`;
    ele2.appendChild(ele1);
  }
  return {
    genre: genre,
    release: release,
    gallery: gallery,
    news: news,
    arrowLeft: arrowLeft,
    arrowRight: arrowRight,
    ContentSideShow: ContentSideShow,
    containMark: containMark,
    vendor: vendor
  };
})();

let genre = new appendHTML(
  "div",
  ".nav__div.nav__genre",
  "nav__genre--slider",
  ApplyContent.genre
);
genre.apply();
appendHTML.prototype.event = function(callback1, callback2, eleDisplay, eleTarget) {
  callback1(eleDisplay, eleTarget);
  callback2(eleDisplay, eleTarget);
};

const eventCallback = (function() {
  function click(ele, eleTarget) {
    let eleDisplay = document.querySelector(ele);
    let domTarget = document.querySelector(eleTarget);
    domTarget.addEventListener("click", () => {
      if (eleDisplay.style.visibility == "visible") {
        eleDisplay.style.visibility = "hidden";
        eleDisplay.style.opacity = 0;
        domTarget.classList.remove("active");
      } else {
        eleDisplay.style.visibility = "visible";
        eleDisplay.style.opacity = 1;
        domTarget.classList.add("active");
      }
    });
  }
  function windowClick(ele, eleTarget) {
    let eleDisplay = document.querySelector(ele);
    let domTarget = document.querySelector(eleTarget);
    window.addEventListener("click", e => {
      if (!eleDisplay.contains(e.target) && !domTarget.contains(e.target)) {
        eleDisplay.style.visibility = "hidden";
        eleDisplay.style.opacity = 0;
        domTarget.classList.remove("active");
      }
    });
  }
  function clicksideShow(btn1Target, btn2Target) {
    let btn1 = document.querySelector(btn1Target);
    let btn2 = document.querySelector(btn2Target);
    let eleTarget1 = document.querySelectorAll(arguments[2])
    let eleTarget2 = document.querySelectorAll(arguments[3]);
    let count = 0;
    btn1.addEventListener("click", ()=>{
      eleTarget1[count].classList.add("middle");
      count++;
      count >= eleTarget1.length? count = 0: "";
      eleTarget1.forEach((particle,index)=>{
        index === count? particle.classList.add("active"): particle.classList.remove("active");
      });
      eleTarget1[count].addEventListener("transitionend", function observer(){
        eleTarget1[count - 1 < 0? eleTarget1.length - 1: count - 1].classList.remove("middle");
        eleTarget1[count].removeEventListener("transitionend", observer);
      });
      eleTarget2.forEach((particle,index)=>{
        index === count? particle.classList.add("active"): particle.classList.remove("active");
      });
    });
    btn2.addEventListener("click", ()=>{
      eleTarget1[count].classList.add("middle");
      count--;
      count < 0 ? count = eleTarget1.length - 1: "";
      eleTarget1.forEach((particle,index)=>{
        index === count? particle.classList.add("active"): particle.classList.remove("active");
      });
      eleTarget1[count].addEventListener("transitionend", function observer(){
        eleTarget1[count + 1 > eleTarget1.length - 1? 0 : count + 1].classList.remove("middle");
        eleTarget1[count].removeEventListener("transitionend", observer);
      });
      eleTarget2.forEach((particle,index)=>{
        index === count? particle.classList.add("active"): particle.classList.remove("active");
      });
    });
  }
  return {
    click: click,
    clickOut: windowClick,
    clicksideShow: clicksideShow
  };
})();

genre.event(
  eventCallback.click,
  eventCallback.clickOut,
  ".nav__genre--slider",
  ".nav__div.nav__genre"
);

let release = new appendHTML(
  "div",
  "nav.nav",
  "nav__release_js",
  ApplyContent.release
);
release.apply();
release.event(
  eventCallback.click,
  eventCallback.clickOut,
  ".nav__release_js",
  ".nav__div.nav__release"
);

let gallery = new appendHTML(
  "div",
  "nav.nav",
  "nav__setGallery",
  ApplyContent.gallery
);
gallery.apply();
gallery.event(
  eventCallback.click,
  eventCallback.clickOut,
  ".nav__setGallery",
  ".nav__div.nav__gallery"
);

let news = new appendHTML(
  "div",
  "nav.nav",
  "nav__news-primary",
  ApplyContent.news
);
news.apply();

const moveStyle = (function() {
  function translate(eleTarget, btn1) {
    let domTarget = document.querySelectorAll(eleTarget);
    let btn1Target = document.querySelector(btn1);
    let css = getComputedStyle(domTarget[0]);
    let widthMove = domTarget[0].clientHeight + parseInt(css.marginTop) * 2;
    let count = 0;
    btn1Target.addEventListener("click", () => {
      count--;
      count < 0 ? (count = 2) : "";
      domTarget[count].style.transform = `translateY(-${widthMove *
        (count + 1)}px)`;
      domTarget[count + 1 > 2 ? 0 : count + 1].style.zIndex = 3;
      domTarget.forEach((particle, index) => {
        index == (count + 1 > 2 ? 0 : count + 1)
          ? ""
          : (particle.style.zIndex = 0);
        let transStyle = particle.style.transform
          ? parseInt(particle.style.transform.split("(")[1])
          : 0;
        particle.style.transform = `translateY(${transStyle + widthMove}px)`;
      });
    });
  }
  function translate2(nameEle, btn) {
    let eleTarget = document.querySelectorAll(nameEle);
    let btnTarget = document.querySelector(btn);
    let css = getComputedStyle(eleTarget[0]);
    let transMove = eleTarget[0].offsetHeight + parseInt(css.marginTop) * 2;
    console.log(transMove);
    eleTarget.forEach((particle, index) => {
      particle.style.zIndex = 2 - index;
      if (index !== 0)
        particle.style.transform = `translateY(-${(index - 1) * transMove}px)`;
    });
    let count = 0;
    btnTarget.addEventListener("click", () => {
      let transStyle = eleTarget[count].style.transform
        ? parseInt(eleTarget[count].style.transform.split("(")[1])
        : 0;
      eleTarget[count].style.transform = `translateY(${transStyle +
        transMove}px)`;
      eleTarget[
        count + 1 > 2 ? 0 : count + 1
      ].style.transform = `translateY(${parseInt(
        eleTarget[count + 1 > 2 ? 0 : count + 1].style.transform.split("(")[1]
      ) - transMove}px)`;
      count++;
      count > 2 ? (count = 0) : "";
      eleTarget[count].addEventListener("transitionend", function myevent(e) {
        e.currentTarget.style.zIndex = 2;
        eleTarget.forEach((particle, index) => {
          if (index !== count) {
            particle.style.zIndex = 0;
          }
        });
        e.currentTarget.removeEventListener("transitionend", myevent);
      });
    });
  }
  return { translate: translate, translate2: translate2 };
})();

news.event(eventCallback.click, eventCallback.clickOut, ".nav__news-primary", ".nav__div.nav__news");
moveStyle.translate2(
  ".section-anime .nav__news-Abox",
  ".section-anime .arrowDown-div"
);
moveStyle.translate2(
  ".section-movie .nav__news-Abox",
  ".section-movie .arrowDown-div"
);
moveStyle.translate2(
  ".section-Tvseries .nav__news-Abox",
  ".section-Tvseries .arrowDown-div"
);

let sideshowArrowLeft = new appendHTML(
  "div",
  ".sideshow-primary",
  "sideshow-primary__arrow div-arrow__left",
  ApplyContent.arrowLeft
);
sideshowArrowLeft.apply();
let sideshowArrowRight = new appendHTML(
  "div",
  ".sideshow-primary",
  "sideshow-primary__arrow div-arrow__right",
  ApplyContent.arrowRight
);
sideshowArrowRight.apply();

let ContentSideShow = new appendHTML(
  "div",
  ".sideshow-primary__div",
  "sideshow-primary__content",
  ApplyContent.ContentSideShow
);
ContentSideShow.apply();

let containMark = new appendHTML ("div", ".sideshow-primary", "sideshow-primary__mark",ApplyContent.containMark);
containMark.apply()

eventCallback.clicksideShow(".sideshow-primary__arrow.div-arrow__left", ".sideshow-primary__arrow.div-arrow__right", ".sideshow-primary__div", ".sideshow-primary__mark > div");

let hoverPlay = new appendHTML("div", ".sideshow-popular__figure, .sideshow-favourite__figure, .sideshow-latest__figure, .sideshow-editorChoice__figure, .sideshow-filmSoon__figure", "panel-list__vendor", ApplyContent.vendor);
hoverPlay.apply();