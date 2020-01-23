//our custom variable
let pointX;
let mouseDist;
let triY;

function setup() {
  //create the canvas element
  createCanvas(900, 500);

  //giving pointX a value of 300
  pointX = 600;
  triY = 300;
  rectMode(CENTER);
  print(pointX);
}

function draw() {
  background(168, 50, 153);
  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  print(mouseDist);
  smooth();
  strokeWeight(50);
  // point expects an X and y doordinate
  point(pointX, 300);

  strokeWeight(mouseDist);
  //line expects two x, y coordinates
  //then coonects the coordinates
  line (mouseX, mouseY, pmouseX, pmouseY);

  noStroke();
  fill(190, 55, 12, 50);
  //ellipse expects an x, y coordinates
  //and with and height
  //ellipse (mouseX, mouseY, 200, 100);

  stroke(random(255),random(255),random(255));
  strokeWeight(mouseDist);
  //fills in shapes with color
  //affects shapes that come after
  fill(30, 120, 45);
  //rect expects an x, y coordinate
  //and width and height
  rect (width/3, height/3, mouseX, 100);


  noFill();
  strokeWeight(30);
  stroke(120, 150, 150);
  //triangle expects three x, y coordinates
  triangle (800, 12, 850, 200, 700, triY);

  //print(mouseX);

  if (mouseIsPressed){
    //when mouse is pressed rest pointx to 200
    pointX = 200;
  } else {
    //when mouse is pressed rest pointx to 600
    pointX = 600;

  }

  if(keyIsPressed){
    //when mouse is pressed rest pointx to 200
    triY = 600;
  } else {
    //when mouse is pressed rest pointx to 600
    triY = 300;

  }
}
