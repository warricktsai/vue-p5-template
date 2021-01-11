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

        p5.setup = () => {
            p5.createCanvas(w, h, p5.WEBGL);
        };

        p5.draw = () => {
            p5.background(250);
            p5.rotateY(p5.frameCount * 0.01);
            
            for (let j = 0; j < 5; j++) {
              p5.push();
              for (let i = 0; i < 80; i++) {
                p5.translate(
                  p5.sin(p5.frameCount * 0.001 + j) * 100,
                  p5.sin(p5.frameCount * 0.001 + j) * 100,
                  i * 0.1
                );
                p5.rotateZ(p5.frameCount * 0.002);
                p5.push();
                p5.sphere(8, 6, 4);
                p5.pop();
              }
              p5.pop();
            }

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