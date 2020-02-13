let r, g, b;

function eye(x, y, eyeSize, pupilSize){
  var pupil = createVector(mouseX, mouseY)
  pupil.limit((eyeSize - pupilSize)/2);
  pupil.add(x,y);

  fill(r, g, b);
  ellipse(x, y, eyeSize, eyeSize);
  fill(0);
  ellipse(pupil.x, pupil.y, pupilSize, pupilSize);
}

function setup() {
  pg = createGraphics(400, 250);

  r = random(255);
  g = random(255);
  b = random(255);

  createCanvas(windowWidth, windowHeight);
  strokeWeight(14);

  input = createInput();
  input.position(windowWidth/2-100, windowHeight/2);

  button = createButton('submit');
  button.position(input.x + input.width+10, windowHeight/2);
  button.mousePressed(greet);

  greeting = createElement('h2', 'your name?');
  greeting.position(windowWidth/2-100, windowHeight/2+30);

  textAlign(CENTER);
  textSize(50);

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d > 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function draw() {
background(r, g, b);
eye(150, 220, 125, 50);
eye(350, 200, 125, 50);
line(150, 350, 350, 400);
}

function draw() {
background(r, g, b);
eye(windowWidth/2-100, 220, 125, 50);
eye(windowWidth/2+100, 200, 125, 50);
line(windowWidth/2-100, 350, windowWidth/2+100, 400);
}

function greet() {
  const name = input.value();
  greeting.html('Hello ' + name + '!');
  input.value('');
}
