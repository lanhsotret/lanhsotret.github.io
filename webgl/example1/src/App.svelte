<script>
  import {InitApp} from "./lib/canvas";
  import { onMount } from 'svelte';

  //Chunmomo
  
  onMount(async () => {
		let canvas = new InitApp({radius: 200});
    canvas.create().then(console.log);
    // canvas.draw();
    // let test = new Grid(100);
    // test.draw()
	});
</script>


<div id="pixi"></div>
<div id="test">
  <canvas></canvas>
</div>

<style lang="css">
  #pixi {
    width: 100vw;
    height: 100vh;
  }
  #test {
    width: 100vw;
    height: 100vh;
  }
</style>
