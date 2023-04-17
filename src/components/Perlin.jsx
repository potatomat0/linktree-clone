import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Perlin = () => {
  const myRef = useRef();
  let particles = [];
  const numOfParticles = 500;
  const noiseScale = 0.001;

  useEffect(() => {
    new p5(Sketch, myRef.current);
  }, []);

  const Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight+200);
      for (let i = 0; i < numOfParticles; i++) {
        particles.push(p.createVector(p.random(p.width), p.random(p.height)));
      }
      p.stroke(70, 12, 104);
      p.strokeWeight(1.7);
      p.frameRate(24);
      // p.clear();
    };
    // https://p5js.org/reference/#/p5/resizeCanvas
    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
      p.background(0,0,0, 200);
      p.clear(0,0,0,200)
      for (let i = 0; i < numOfParticles; i++) {
        let particle = particles[i];
        p.point(particle.x, particle.y);
        let n = p.noise(
          particle.x * noiseScale,
          particle.y * noiseScale,
          p.frameCount * noiseScale * noiseScale
        );
        let angle = p.TAU * n;
        direction(particle, angle);
        if (!onScreen(particle)) {
          particle.x = p.random(p.width);
          particle.y = p.random(p.height);
        }
      }
      if (p.frameCount % 180 === 0) {
        changeDirection();
        changeRGB();
      }
    };

    const direction = (p, a) => {
      p.y -= Math.sin(a)
      p.x += Math.cos(a);
      // p.x += Math.sin(a);
      // p.y += Math.cos(a) - 2 * Math.cos(2 * a) - Math.cos(4 * a);
    };

    const changeDirection = () => {
      p.noiseSeed(p.millis());
    };

    const changeRGB = () => {
      let r = p.random(200);
      let g = p.random(100);
      let b = p.random(200);
      p.stroke(r, g, b);
      // p.background(r -255  , g - 255, b -255);
    };

    const onScreen = (v) => {
      return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
    };
  };

  return <div ref={myRef}></div>;
};

export default Perlin;