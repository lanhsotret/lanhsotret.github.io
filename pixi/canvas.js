// const imgs = Array.from($(".MvTop").data("img").split(","), (img, index) => {
//   return {
//     name: "mv" + (index + 1),
//     url: "/images/top/" + img.trim(),
//   };
// });

let imgs = Array.from({length: 4}, (_, index) => ({
    name: 'mv' + (index + 1),
    url: `./girls/girl${index + 1}.jpg`
}));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
let count;
let tl;
function animate(target, time, index, particle) {
  let mv = particle.find(el => el.order === target);
  count = count - 1 > 0? count - 1:particle.length;
  tl = gsap.timeline({
      onComplete: () => {
          mv.scale.x = 1;
          mv.scale.y = 1;
          particle.forEach(ele => {

          });
          for (const ele of particle) {
              if (ele.order != (target - 1 > 0 ? target - 1 : particle.length)) {
                  ele.zIndex = ele.zIndex - 1 > 0 ? ele.zIndex - 1 : particle.length - 1;
              } else {
                  ele.zIndex = particle.length;
              }
          }
      },
  });
  tl.to(mv.scale, time, {
      x: 1.5,
      y: 1.5,
      ease: "ease"
  });
  shuffleArray(index);
  for (let ii = 0; ii < index.length; ii++) {
      tl.to(
          mv.children[index[ii]].scale,
          1,
          {
              x: 1,
              y: 1,
              ease: "elastic",
          },
          ii / 10000
      );
  }
  shuffleArray(index);
  for (let ii = 0; ii < index.length; ii++) {
      tl.to(
          mv.children[index[ii]].scale,
          1,
          {
              x: 0,
              y: 0,
              ease: "bounce.out",
          },
          time - 5 - index.length / 10000 + ii / 10000
      );
  }
  tl.call(
      animate,
      [
          target - 1 > 0 ? target - 1 : particle.length,
          time, index, particle
      ],
      time - 5 - index.length / 10000
  );
}
PIXI.utils.sayHello("I'm PIXI");
const ele = document.getElementById("pixi");
const app = new PIXI.Application({
  antialias: true,
  autoDensity: true,
  resolution: 1,
  backgroundAlpha: 0,
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
// console.log(app.renderer, ele.clientWidth);
app.renderer.resize(ele.clientWidth, ele.clientHeight);
ele.appendChild(app.view);
// PIXI.Loader.shared
//   .add("./test1.jpg")
//   .add("./test2.jpg")
//   .add("./test3.jpg")
//   .load(setup);
PIXI.Loader.shared.add(imgs).load(setup);
function setup(e) {
  let square = 20;
  app.stage.sortableChildren = true;
  function run() {
      let _zIndex = 1;
      for (const img in e.resources) {
          let _sprite = new PIXI.Sprite(e.resources[img].texture);
          let _rateImg = Math.max(
              app.renderer.screen.height / _sprite._texture.orig.height,
              app.renderer.screen.width / _sprite._texture.orig.width
          );
          _sprite.scale.set(_rateImg);
          let _NewTexture = new PIXI.RenderTexture(
              new PIXI.BaseRenderTexture(
                  app.renderer.screen.width,
                  app.renderer.screen.height,
                  PIXI.SCALE_MODES.LINEAR,
                  1
              )
          );
          app.renderer.render(_sprite, { renderTexture: _NewTexture });
          let MvShow = new PIXI.ParticleContainer(10000, {
              vertices: true,
              position: true,
              rotation: true,
              uvs: true,
              tint: true,
          });
          let i = 0;
          while (i <= Math.floor(app.renderer.screen.width / square)) {
              let squareH = square;
              let squareW = square;
              if (i === Math.floor(app.renderer.screen.width / square)) {
                  squareW = app.renderer.screen.width - square * i;
              }
              for (
                  let j = 0;
                  j <= Math.floor(app.renderer.screen.height / square);
                  j++
              ) {
                  if (j === Math.floor(app.renderer.screen.height / square)) {
                      squareH = app.renderer.screen.height - square * j;
                  }
                  let FaTexture = new PIXI.Texture(
                      _NewTexture,
                      new PIXI.Rectangle(i * square, j * square, squareW, squareH)
                  );
                  let _SpImg = new PIXI.Sprite(FaTexture);
                  _SpImg.anchor.set(0.5, 0.5);
                  _SpImg.y = j * square + _SpImg.height / 2;
                  _SpImg.x = i * square + _SpImg.width / 2;
                  _SpImg.scale.set(0);
                  MvShow.addChild(_SpImg);
              }
              i++;
          }
          MvShow.pivot.x = app.renderer.screen.width / 2;
          MvShow.pivot.y = app.renderer.screen.height / 2;
          MvShow.x = app.renderer.screen.width / 2;
          MvShow.y = app.renderer.screen.height / 2;
          MvShow.zIndex = _zIndex;
          MvShow.order = _zIndex;
          app.stage.addChild(MvShow);
          _zIndex++;
      }
      let indexArray = Array.from(
          app.stage.children[0].children,
          (_, index) => index
      );
      count = count || app.stage.children.length;
      animate(count, 15, indexArray, app.stage.children);
  }
  let timeout;
  run();
  window.addEventListener('resize', () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          tl.clear();
          app.stage.removeChildren(0, app.stage.children.length); 
          app.renderer.resize(ele.clientWidth, ele.clientHeight);
          run();
      }, 100)
  })
  
}

