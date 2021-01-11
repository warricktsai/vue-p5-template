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
            p5.background(0);

            let locX = p5.mouseX - w / 2;
            let locY = p5.mouseY - h / 2;

            p5.ambientLight(50);
            p5.directionalLight(255, 0, 0, 0.25, 0.25, 0);
            p5.pointLight(0, 0, 255, locX, locY, 250);

            p5.push();
            p5.translate(-w / 4, 0, 0);
            p5.rotateZ(p5.frameCount * 0.02);
            p5.rotateX(p5.frameCount * 0.02);
            p5.specularMaterial(250);
            p5.box(100, 100, 100);
            p5.pop();

            p5.translate(w / 4, 0, 0);
            p5.ambientMaterial(250);
            p5.sphere(120, 64);

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