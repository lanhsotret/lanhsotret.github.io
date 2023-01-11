// import { Application, Assets, Sprite } from "pixi.js";
import * as PIXI from "pixi.js";

const ele = document.querySelector("#canvas") as HTMLElement;
const app = new PIXI.Application({
  antialias: true,
  backgroundAlpha: 0, // default: false
  resolution: 1,
});
(app.renderer.view as HTMLCanvasElement).style.position = "absolute";
(app.renderer.view as HTMLCanvasElement).style.display = "block";
app.renderer.resize(ele.clientWidth, ele.clientHeight);

ele.appendChild(app.view as HTMLCanvasElement);

PIXI.Assets.add("cat1", "../imgs/cat1.jpg");
PIXI.Assets.add("cat2", "../imgs/cat4.jpg");
PIXI.Assets.add("cat3", "../imgs/cat8.jpg");

const texturesPromise = PIXI.Assets.load(["cat1", "cat2", "cat3"]);

type TextureCollect = Record<"cat1" | "cat2" | "cat3", PIXI.Texture>

let bufferTex: {[k in string]: PIXI.Texture} = {};

texturesPromise.then((tex: TextureCollect) => {
  Object.entries(tex).forEach(([key, _texture]) => {
    let _sprite = new PIXI.Sprite(_texture);
    let _rateImg = Math.max(
      app.renderer.screen.height / _texture.orig.height,
      app.renderer.screen.width / _texture.orig.width
    );
    _sprite.scale.set(_rateImg);
    _sprite.anchor.set(0.5, 0.5);
    _sprite.x = app.renderer.screen.width/2;
    _sprite.y = app.renderer.screen.height/2;
    let _NewTexture = new PIXI.RenderTexture(
      new PIXI.BaseRenderTexture({
        width: app.renderer.screen.width,
        height: app.renderer.screen.height,
        scaleMode: PIXI.SCALE_MODES.LINEAR,
        resolution: 1,
      })
    );
    app.renderer.render(_sprite, { renderTexture: _NewTexture });
    bufferTex[key] = _NewTexture;
  });
  let sprite = new PIXI.Sprite(bufferTex.cat1);
  // app.stage.addChild(sprite);
  // console.log(tex);
});

// let ele = document.querySelector("#canvas") as HTMLCanvasElement
