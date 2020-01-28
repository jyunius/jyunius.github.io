function setup() {
  // put setup code here

  createCanvas(900, 500);
  //background(237, 197, 85);
  frameRate(10);
}

function draw() {
  // put drawing code here
  background(237, 197, 85);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + ' -> ' + mouseX);

  //rectMode(CENTER);
  //fill(181, 160, 134);
  //noStroke();
  //rect(width/2, height/2, 100, 100);

  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(100, height/2, 50, 50);

  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(400, height/2, 50, 50);

  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(700, height/2, 50, 50);

    arc(450, 100, 200, 200, 0, PI + QUARTER_PI);
    stroke(random(255), random(255), random(255));
}
