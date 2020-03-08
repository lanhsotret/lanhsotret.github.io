const applyHTML = (function() {
  function createEle(nameEle, nameClass, parentName) {
    let createEle = document.createElement(nameEle);
    createEle.classList.add(nameClass);
    let parentEle = document.querySelector(parentName);
    parentEle.appendChild(createEle);
    return createEle;
  }
  function append(callback, nameEle, nameClass, parentName) {
    let targetEle = callback(nameEle, nameClass, parentName);
    targetEle.innerHTML = `<div class="panel-sliderJS">
                <div class="panel-sliderJS__title">
                  <p class="panel-sliderJS__title-p">name films</p>
                  <div class="panel-sliderJS__caption">
                    <p>tv series</p>
                    <div class="panel-sliderJS__duration">
                      <i class="fa fa-hourglass" aria-hidden="true"></i
                      ><span>24 minute</span>
                    </div>
                    <div class="panel-sliderJS__release">
                      <i class="fa fa-calendar-minus-o" aria-hidden="true"></i
                      ><span>2019</span>
                    </div>
                  </div>
                </div>
                <div class="panel-sliderJS__line"></div>
                <div class="panel-sliderJS__content"><p>
                  Vào năm 2043, Infinite Dendrogram – game thực tế ảo online thành công
                  đầu tiên trên thế giới – đã được ra mắt. Bên cạnh khả năng mô phỏng 5
                  giác quan một cách hoàn hảo, cùng với những tính năng đặc sắc, game hứa
                  hẹn sẽ mang lại cho người chơi một thế giới với những khả năng bất tận.
                </p></div>
                <div class="panel-sliderJS__rate-view">
                  <div class="panel-sliderJS__star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="panel-sliderJS__view">
                    <i class="fa fa-eye" aria-hidden="true"></i><span>2000</span>
                  </div>
                </div>
              </div>`;
  }
  return { append: append,
    createEle: createEle
  };
})();

applyHTML.append(applyHTML.createEle, "div", "hoverJs-panel-slider", "body > main");


const event = (function(){
  function mousemove(ele) {
    for(let i = 0; i < arguments.length; i++) {
      if(i === 0) {continue;};
      document.querySelectorAll(arguments[i]).forEach(particle=>{
        particle.onmousemove = (e)=>{
          setupSidebar(e, ele);
        };
        particle.addEventListener("mouseout", ()=>{
          clear(ele);
        });
      });
    }
  }
  function setupSidebar(e,ele) {
    let x = e.pageX;
    let y = e.pageY;
    let title = e.currentTarget;
    let eleTarget = document.querySelector(ele);
    let eleTitle = eleTarget.getElementsByClassName(`${eleTarget.children[0].className}__title-p`)[0];
    eleTitle.innerHTML = title.getElementsByTagName("img")[0].alt;
    eleTarget.style.display = "block";
    eleTarget.style.top = `${y + 30}px`;
    eleTarget.style.left = `${x + 30}px`;
    eleTarget.style.opacity = 1;
  }
  function clear(ele) {
    let eleTarget = document.querySelector(ele);
    eleTarget.style.display = "none";
    eleTarget.style.opacity = 0;
  }
  return {mousemove: mousemove}
})();

event.mousemove(".hoverJs-panel-slider", ".sideshow-popular__div", ".sideshow-favourite__div", ".sideshow-latest__div", ".sideshow-editorChoice__div", ".sideshow-filmSoon__div");

