(function (PIXI, gsap) {
    'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var PIXI__namespace = /*#__PURE__*/_interopNamespaceDefault(PIXI);

    // import { Application, Assets, Sprite } from "pixi.js";
    const ele = document.querySelector("#canvas");
    const app = new PIXI__namespace.Application({
        antialias: true,
        backgroundAlpha: 0,
        resolution: 1,
    });
    app.renderer.view.style.position = "absolute";
    app.renderer.view.style.display = "block";
    app.renderer.resize(ele.clientWidth, ele.clientHeight);
    ele.appendChild(app.view);
    PIXI__namespace.Assets.add("cat1", "../imgs/cat1.jpg");
    PIXI__namespace.Assets.add("cat2", "../imgs/cat4.jpg");
    PIXI__namespace.Assets.add("cat3", "../imgs/cat8.jpg");
    const texturesPromise = PIXI__namespace.Assets.load(["cat1", "cat2", "cat3"]);
    let uniformGlobal;
    let bufferTex = {};
    // function play(obj: UniformSource, duration: number, delay: number) {
    //   let tl = gsap.timeline({ onComplete: () => play(obj, duration, delay) });
    //   tl.to(obj, {
    //     uTime: 1,
    //     duration: duration,
    //     ease: "sine.inOut",
    //     repeat: 1,
    //   });
    // }
    texturesPromise.then((tex) => {
        Object.entries(tex).forEach(([key, _texture]) => {
            let _sprite = new PIXI__namespace.Sprite(_texture);
            let _rateImg = Math.max(app.renderer.screen.height / _texture.orig.height, app.renderer.screen.width / _texture.orig.width);
            _sprite.scale.set(_rateImg);
            _sprite.anchor.set(0.5, 0.5);
            _sprite.x = app.renderer.screen.width / 2;
            _sprite.y = app.renderer.screen.height / 2;
            let _NewTexture = new PIXI__namespace.RenderTexture(new PIXI__namespace.BaseRenderTexture({
                width: app.renderer.screen.width,
                height: app.renderer.screen.height,
                scaleMode: PIXI__namespace.SCALE_MODES.LINEAR,
                resolution: 1,
            }));
            app.renderer.render(_sprite, { renderTexture: _NewTexture });
            bufferTex[key] = _NewTexture;
        });
        const geometry = new PIXI__namespace.Geometry();
        geometry.addAttribute("a_Position", // the attribute name
        [
            0,
            0,
            app.renderer.screen.width,
            0,
            app.renderer.screen.width,
            app.renderer.screen.height,
            0,
            app.renderer.screen.height,
        ], 2);
        geometry.addIndex([0, 1, 2, 0, 2, 3]);
        uniformGlobal = {
            uSampler1: bufferTex.cat1,
            uSampler2: bufferTex.cat2,
            uTime: 0,
            u_img: [app.renderer.screen.width, app.renderer.screen.height],
            uDis: PIXI__namespace.Texture
                .from(`<svg viewBox="0 0 ${window.innerWidth} ${window.innerHeight}" width="${window.innerWidth}px" height="${window.innerHeight}" xmlns="http://www.w3.org/2000/svg">
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="13" /></filter>
        <circle r="5000" filter="url(#n)"></circle>
    </svg>`),
            uZoom2: 1,
            uZoom1: 1,
            uTurnOn: 1,
        };
        const shader = PIXI__namespace.Shader.from(document.getElementById("vertex-shader").innerHTML.trim(), document.getElementById("fragment-shader").innerHTML.trim(), uniformGlobal);
        const test = new PIXI__namespace.Mesh(geometry, shader);
        console.log(test);
        app.stage.addChild(test);
        let count = 0;
        let imgs = Object.keys(bufferTex);
        function play(obj, duration, delay, first) {
            let tlZoom = gsap.timeline({ ease: "sine.inOut" });
            tlZoom
                .to(obj, {
                uZoom1: 0.8,
                duration: 10,
            })
                .to(obj, {
                uZoom2: 0.8,
                duration: 10
            }, "<3");
            if (!first) {
                tlZoom.seek(3);
            }
            count++;
            if (count >= imgs.length) {
                count = 0;
            }
            let tlTime = gsap.timeline({
                onComplete: () => {
                    tlZoom.kill();
                    obj.uTime = 0;
                    obj.uZoom1 = 1;
                    obj.uZoom2 = 1;
                    obj.uSampler1 = bufferTex[imgs[count]];
                    obj.uSampler2 =
                        bufferTex[imgs[count + 1 >= imgs.length ? 0 : count + 1]];
                    play(obj, duration, delay, false);
                },
            });
            tlTime.to(obj, {
                uTime: 1,
                duration: duration,
                ease: "sine.inOut",
                delay: delay,
            });
        }
        play(uniformGlobal, 3, 3, true);
    });
    // let ele = document.querySelector("#canvas") as HTMLCanvasElement

})(PIXI, gsap);
