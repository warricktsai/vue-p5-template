<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = 500;
        let h = 400;

        // let w = window.innerWidth;
        // let h = window.innerHeight;
        var myFont;

        p5.preload = () => {
          myFont = p5.loadFont('/fonts/Inconsolata-Medium.ttf');
        };

        p5.setup = () => {
            p5.createCanvas(w, h, p5.WEBGL);
            p5.fill('#ED225D');
            p5.textFont(myFont);
            p5.textSize(64);
            p5.text('p5*js', 0, 50);
        };

        p5.draw = () => {
            // p5.background(0);

        };
    }

    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  unmounted () {
    this.p5Canvas = null;
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: relative;
}

main {
  margin: 0 auto;
  width: 90vw;
}
</style>