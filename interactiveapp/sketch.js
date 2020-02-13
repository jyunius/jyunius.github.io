

let fish;
let rotation = 0;
let r, g, b;
let fishX;
let fishY;

let fishXspeed;
let fishYspeed;

let mouseCollide;

let score = 0

let endScreenBool = false;
let cat;

function eye(x, y, eyeSize, pupilSize){
  var pupil = createVector(mouseX, mouseY)
  pupil.limit((eyeSize - pupilSize)/2);
  pupil.add(x,y);

  fill(r, g, b);
  ellipse(x, y, eyeSize, eyeSize);
  fill(0);
  ellipse(pupil.x, pupil.y, pupilSize, pupilSize);
}

function preload(){
cat = loadImage("images/cat.png");
}

function preload(){
fish = loadImage("images/fish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //image(cat, mouseX, mouseY, width/2, height/2);
  fishX = random(21, width-21);
  fishY = random(21, height-21);

  fishXspeed = 2;
  fishYspeed = 2;

  imageMode(CENTER);
  rectMode(CENTER);

  pg = createGraphics(400, 250);

r = random(255);
g = random(255);
b = random(255);

createCanvas(windowWidth, windowHeight);
strokeWeight(14);

input = createInput();
input.position(width/2-100, 30);

button = createButton('submit');
button.position(input.x + input.width+10, 30);
button.mousePressed(greet);

greeting = createElement('h2', 'your name?');
greeting.position(width/2-100, 30);

textAlign(CENTER);
textSize(50);
}

function draw() {
  imageMode(CENTER);
  background(255);
  eye(150, 220, 125, 50);
  eye(350, 200, 125, 50);
  line(150, 350, 350, 400);
  fill(0);
  textSize(40);
  text("your score is " + score + "00", width/2, 120);
  mouseCollide = dist(mouseX, mouseY, fishX, fishY);
  rotation++;
  fishX = fishX + fishXspeed;
  fishY = fishY + fishYspeed;

  //checks when the furby has reached the
  //sides of screen and reverses
  if(fishX >= width-20 || fishX <= 20){
    fishXspeed = fishXspeed * -1;
  }

  if(fishY >= height-20 || fishY <= 20){
    fishYspeed = fishYspeed * -1;
  }

  image(fish, fishX, fishY, 40, 40);


  //if the mouse collision is true
  //trigger all of this stuff
  if(mouseCollide < 20){
    score++;
    print(score);
    fishX = random(21, width-21);
    fishY = random(21, height-21);
    fishXspeed = fishXspeed*1.2;
    fishYspeed = fishYspeed*1.2;
  }

  if(score == 10){
    endScreenBool = true;
  }

  if(endScreenBool == true){
    endScreen();
  }
}

function endScreen(){
  background(random(255), random(255), random(255));
  image(fish, width/2, height/2, fishX, fishY);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);

}

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

function greet() {
  imageMode(CENTER);
  const name = input.value();
  greeting.html('Hello ' + name + '!');
  input.value('');
}
