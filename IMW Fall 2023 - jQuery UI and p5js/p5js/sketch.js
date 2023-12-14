// This only runs once
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 100, 200);
}

// This continuously runs
function draw() {
  if (mouseIsPressed === true) {
    strokeWeight(random(5, 11));
    stroke(0, 0, random(256));
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, random(10, 50), random(10, 50));
  }


  if (keyIsPressed) {
    background(220, 100, 200);
  }
}