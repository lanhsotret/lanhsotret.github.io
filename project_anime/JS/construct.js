const EventList = (function() {
  function BtnSame(eventName) {
    let button = arguments[1].split(";");
    button.forEach((btn, order) => {
      let btnTarget = document.querySelectorAll(btn);
      btnTarget.forEach((particle) => {
        particle.addEventListener(eventName, (e)=>{
          arguments[2](e.currentTarget);
        });
      });
    });
  }
  return {
    BtnSame: BtnSame
  }
})();

const callback = (function(){
    function Addclass(ele){
        ele.classList.add("active");
    }
    function removeClass(ele) {
        ele.classList.remove("active");
    }
    return {
        Addclass: Addclass,
        removeClass: removeClass
    }
})();

EventList.BtnSame("mouseup", ".panel-list button;.sideshow-primary__arrow;.nav__news-arrow", callback.removeClass);
EventList.BtnSame("mousedown", ".panel-list button;.sideshow-primary__arrow;.nav__news-arrow", callback.Addclass);