// let radius = 50;
// let angle = 0;
// let colorRatio = 0;
// let noiseMax = 0.5;
// let colorRatioIncrement = 0.01;
// // array that stores the previous coordinate of the circle
// let positions = [];

// let lastClickTime = 0;
// let expandDuration = 0.6;
// let expandRadius = radius;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(0, 0, 0,0) 
//   drawCircle(mouseX, mouseY)
// }

// function drawCircle(x,y) {
//   positions.push([x,y]);
//   if (positions.length > 10) {
//     positions.shift();
//     [x,y] = positions[0];
//   }
  
//   let gradient = drawingContext.createRadialGradient(x, y, expandRadius/2, x, y, expandRadius);
//   gradient.addColorStop(0, lerpColor(color(148, 0, 211, 25), color(0, 255, 255, 255), colorRatio));
//   gradient.addColorStop(1, lerpColor(color(0, 255, 255, 255), color(148, 0, 211, 25), colorRatio));
//   drawingContext.fillStyle = gradient;
  
//   noStroke();
  
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += radians(5)) {
//     let xoff = map(cos(a + angle), -1, 1, 0, noiseMax);
//     let yoff = map(sin(a + angle), -1, 1, 0, noiseMax);
//     let r = map(noise(xoff, yoff), 0, 1, expandRadius/2, expandRadius*2);
//     let circleX = mouseX + r * cos(a);
//     let circleY = mouseY + r * sin(a);
//     vertex(circleX, circleY);
//   }
  
//   endShape(CLOSE);
  
//   angle += radians(0.5);
  
//   colorRatio += 0.5*colorRatioIncrement;
  
//   if (colorRatio > 1 || colorRatio < 0) {
//     colorRatioIncrement *= -1;
//     colorRatio += colorRatioIncrement;
//   }
  
//  if (mouseIsPressed) {
//     lastClickTime = millis();
//  }
  
//  let timeSinceLastClick = (millis() - lastClickTime) /1000;
//  if (timeSinceLastClick < expandDuration) {
//    expandRadius = map(timeSinceLastClick ,0 ,expandDuration ,radius ,radius *0.7);
//  } else {
//    expandRadius = radius;
//  }
// }
