<template>
  <div class="container">
    <div class="p5Canvas"></div>
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

        p5.setup = () => {
            p5.createCanvas(w, h);
        };

        p5.draw = () => {
            // call your method:
            p5.changeBG(p5.mouseX, p5.mouseY);
            
            // p5.background(33, 33, 33);
            p5.ellipse(p5.mouseX, p5.mouseY, 100);

        };

        // create methods:
        p5.changeBG = (x, y) => {
          let _x = p5.map(x, 0, w, 0, 255);
          let _y = p5.map(y, 0, h, 0, 255);
          p5.background(_x, _y, 33);
        }
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