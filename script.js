// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, w,w2,change,
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue,
  backgroundColor,
  coinX,
  coinY,
  coinX2,
  coinY2,
  score,
  time,
  gameIsOver,
  hit,
  hit2,
  button,
  createButton,
  rotateX,
  rotateY,
  frameCount,
  model;
w;
w2;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  coinX2 = random(width);
  coinY2 = random(height);
  time = 2000;
  gameIsOver = false;
  score = 0;
  noStroke();
  w = 20;
  w2 = 30;
}

function draw() {
  background(backgroundColor);

  if (time > 0) {
    rotateCoin();
  }

  fill(36, 58, 85);
  ellipse(coinX, coinY, w, 20);
  fill(23, 65, 67);
  ellipse(coinX2, coinY2, w2, 30);
  fill(42, 98, 23);
  ellipse(mouseX, mouseY, 20);
  text(`Your score: ${score}`, 20, 20);
  text(`Time remaining: ${time}`, 20, 40);

  handleTime();
  hit = collideCircleCircle(mouseX, mouseY, 20, coinX, coinY, 20);
  hit2 = collideCircleCircle(mouseX, mouseY, 20, coinX2, coinY2, 30);
  if (hit && !gameIsOver) {
    handleCollision();
  }
  if (hit2 && !gameIsOver) {
    handleCollision2();
  }
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  console.log(`You got a hit at ${mouseX}, ${mouseY}!`);
  score++;
  coinX = random(width);
  coinY = random(height);
}

function handleCollision2() {
  console.log(`You got a hit at ${mouseX}, ${mouseY}!`);
  score += 2;
  coinX2 = random(width);
  coinY2 = random(height);
}

function handleTime() {
  // We'll write code to handle the time.
  if (time > 0) {
    time--;
  } else {
    gameIsOver = true;
    // button = createButton("click me");
    // button.position(19, 19);
  }
}

function rotateCoin() {
  if (w == 20 || w2 == 30) {
    change = -1;
  } else if (w == 0 || w2 == 0) {
    change = 1;
  }
  w += change;
  w2 += change;
}
