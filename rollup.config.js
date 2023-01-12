import typescript from "@rollup/plugin-typescript";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import nodePolyfills from "rollup-plugin-polyfill-node";
import terser from "@rollup/plugin-terser";

// const devMode = (process.env.NODE_ENV === 'development');
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./webgl/example1/src/index.ts",
  output: {
    dir: "./webgl/example1",
    format: "iife",
    globals: {
      "pixi.js": 'PIXI',
      gsap: "gsap",
    }
  },
  external: ["pixi.js", "gsap"],
  plugins: [
    typescript(),
    // commonjs(),
    // nodePolyfills(),
    // nodeResolve({ browser: true }),
    production &&
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: true,
          drop_debugger: true,
        },
        output: { quote_style: 1 },
      }),
  ],
  watch: {
    include: "./webgl/example1/src/**/*.ts",
    clearScreen: false,
  },
};
