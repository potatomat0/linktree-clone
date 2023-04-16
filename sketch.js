let x;
let y;
let xspeed;
let yspeed;
let dvd;
let r, g, b;

function preload() {
  dvd = loadImage("./R.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 7;
  yspeed = 7;
  pickcolor();
}

function pickcolor() {
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
  background(0,0,0,0);
  clear()
  noStroke(255);
  fill(255);
  tint(r, g, b);
  // rect(x, y, 80, 60);
  image(dvd, x, y, 80, 60);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    pickcolor();
  } else if (x <= 0) {
    xspeed = -xspeed
    x = 0;
    pickcolor();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    pickcolor();
  } else if (y <= 0) {
    yspeed = -yspeed
    y = 0;
    pickcolor();
  }
}