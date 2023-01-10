import { Application, Assets, Sprite } from "pixi.js";

const ele = document.querySelector("#canvas") as HTMLElement;
const app = new Application({
  antialias: true,
  backgroundAlpha: 0, // default: false
  resolution: 1,
});
(app.renderer.view as HTMLCanvasElement).style.position = "absolute";
(app.renderer.view as HTMLCanvasElement).style.display = "block";
app.renderer.resize(ele.clientWidth, ele.clientHeight);

ele.appendChild(app.view as HTMLCanvasElement);

// let ele = document.querySelector("#canvas") as HTMLCanvasElement
