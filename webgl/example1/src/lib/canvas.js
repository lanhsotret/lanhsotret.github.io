import * as PIXI from "pixi.js";
import { Assets } from '@pixi/assets';

class InitApp {
  constructor(option) {
    this.pixi = PIXI;
    this.attached = document.querySelector("#pixi");
    this.app;
    PIXI.utils.sayHello("I'm PIXI");
    this.r = option.radius;
    this.angle = (2 * Math.PI) / 6;
    this.x = this.r;
    this.y = this.r * Math.sin(this.angle);
    this.gWidth;
    this.gHeight;
    this.ceil;
    this.imgs;
  }
  create() {
    this.app = new this.pixi.Application({
      antialias: true,
      autoDensity: true,
      resolution: 1,
      backgroundAlpha: 0,
    });
    this.app.renderer.view.style.position = "absolute";
    this.app.renderer.view.style.display = "block";
    this.app.renderer.resize(
      this.attached.clientWidth,
      this.attached.clientHeight
    );
    this.gWidth = this.app.renderer.screen.width;
    this.gHeight = this.app.renderer.screen.height;
    this.imgs = Array.from({ length: 8 }, (_, index) => ({
      name: "img" + (index + 1),
      url: `images/cat${index + 1}.jpg`,
    }));
    // this.pixi.Loader.shared.add(this.imgs).load(this.setup);
    return Assets.load(`images/cat1.jpg`)
  }
  setup(e) {
    console.log(this.pixi);
    this.ceil = new this.pixi.Container();
    this.attached.appendChild(this.app.view);
    this.app.stage.addChild(this.ceil);
  }
  hexagon(x = this.x, y = this.y) {
    let points = Array.from({ length: 6 }, (_, index) => {
      return [
        x + this.r * Math.cos(this.angle * index),
        y + this.r * Math.sin(this.angle * index),
      ];
    });
    let g = new this.pixi.Graphics();
    g.beginFill(0x3500fa, Math.random());
    g.drawPolygon(points.flat());
    g.endFill();
    this.app.stage.addChild(g);
  }

  // draw() {
  //   let x = this.x;
  //   let y = this.y;
  //   let i = 0;
  //   let j = 0;
  //   console.log(this.gWidth/ (this.x * 2 + 10))
  //   while (j <= Math.ceil(this.gHeight/ (this.y * 2 + 10))) {
  //     while (i <= Math.ceil(this.gWidth/ (this.x * 2 + 10))) {
  //       x = this.x + (this.r + this.r * Math.cos(this.angle)) * i + 20*i;
  //       y = this.y * (j * 2 + 1) + (i % 2 ? this.r * Math.sin(this.angle) + 20*Math.cos(this.angle) : 0) + 20*j;
  //       this.hexagon(x, y);
  //       ++i;
  //     }
  //     i = 0;
  //     ++j;
  //   }
  // }
}

// class Grid {
//   constructor(radius) {
//     this.r = radius;
//     this.canvas = document
//       .getElementById("test")
//       .getElementsByTagName("canvas")[0];
//     this.parent = document.getElementById("test");
//     this.ctx = this.canvas.getContext("2d");
//     this.canvas.height = this.parent.clientHeight;
//     this.canvas.width = this.parent.clientWidth;
//     this.angle = (2 * Math.PI) / 6;
//     this.x = this.r;
//     this.y = this.r * Math.sin(this.angle);
//     this.col = Math.floor(this.parent.clientWidth / radius);
//     this.row = Math.floor(this.parent.clientHeight / (this.y * 2));
//     console.log(this.row);
//   }
//   #hexagon(x, y) {
//     this.ctx.beginPath();
//     for (let i = 0; i < 6; i++) {
//       this.ctx.lineTo(
//         x + this.r * Math.cos(this.angle * i),
//         y + this.r * Math.sin(this.angle * i)
//       );
//     }
//     this.ctx.closePath();
//     this.ctx.stroke();
//   }
//   draw() {
//     let x = this.x;
//     let y = this.y;
//     let i = 0;
//     let j = 0;
//     while (j < this.row) {
//       while (i < this.col) {
//         x = this.x + (this.r + this.r * Math.cos(this.angle)) * i;
//         y = this.y * (j * 2 + 1) + (i % 2 ? this.r * Math.sin(this.angle) : 0);
//         if (x + this.r > this.parent.clientWidth) break;
//         this.#hexagon(x, y);
//         ++i;
//       }
//       i = 0;
//       ++j;
//     }
//   }
// }

export { InitApp };
