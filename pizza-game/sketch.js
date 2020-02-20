//identify ingredients
let dough;
let tomato;
let mushroom;
let oregano;
let pepper;
let pepperoni;
let bg;
let y = 0;

//toamto dragging variables
var tomatox, tomatoy, tomatow, tomatoh; // Location and size
var tomatodragging = false; // Is the object being dragged?
var tomatorollover = false; // Is the mouse over the ellipse?
var tomatooffsetX, tomatooffsetY;

//mushroom dragging variables
var mushroomx, mushroomy, mushroomw, mushroomh; // Location and size
var mushroomdragging = false; // Is the object being dragged?
var mushroomrollover = false; // Is the mouse over the ellipse?
var mushroomoffsetX, mushroomoffsetY;

//oregano dragging variables
var oreganox, oreganoy, oreganow, oreganoh; // Location and size
var oreganodragging = false; // Is the object being dragged?
var oreganorollover = false; // Is the mouse over the ellipse?
var oreganooffsetX, oreganooffsetY;

//pepper dragging variables
var pepperx, peppery, pepperw, pepperh; // Location and size
var pepperdragging = false; // Is the object being dragged?
var pepperrollover = false; // Is the mouse over the ellipse?
var pepperoffsetX, pepperoffsetY;

//pepperoni dragging variables
var pepperonionix, pepperoniy, pepperoniw, pepperonih; // Location and size
var pepperonidragging = false; // Is the object being dragged?
var pepperonirollover = false; // Is the mouse over the ellipse?
var pepperonioffsetX, pepperonioffsetY;

//image preload
function preload(){
  dough = loadImage('images/dough1.png');
  tomato = loadImage('images/tomato.png');
  mushroom = loadImage('images/mushroom.png');
  oregano = loadImage('images/oregano.png');
  pepper = loadImage('images/pepper.png');
  pepperoni = loadImage('images/pepperoni.png');
}

function setup() {
//canvas
  bg = loadImage('images/bg1.jpg')
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

//tomato location&size
  tomatox =  windowWidth/2-300;
  tomatoy = 200;
  tomatow = 100;
  tomatoh = 100;

//mushroom location&size
  mushroomx =  windowWidth/2-400;
  mushroomy = 400;
  mushroomw = 100;
  mushroomh = 100;

//oregano location&size
  oreganox =  windowWidth/2;
  oreganoy = 100;
  oreganow = 100;
  oreganoh = 100;

  //pepper location&size
  pepperx =  windowWidth/2+300;
  peppery = 200;
  pepperw = 100;
  pepperh = 100;

  //pepperoni location&size
  pepperonix =  windowWidth/2+400;
  pepperoniy = 400;
  pepperoniw = 100;
  pepperonih = 100;
}

function draw(){
  background('255');
//text
 textSize(50);
 textLeading((mouseX / width) * 64);
 text("Build your own pizza!",
   100, 100, 200, 500);

//tomato dragging logic
  if (mouseX > tomatox && mouseX < tomatox + tomatow && mouseY > tomatoy && mouseY < tomatoy + tomatoh) {
    tomatorollover = true;
  }
  else {
    tomatorollover = false;
  }
  if (tomatodragging) {
    tomatox = mouseX + tomatooffsetX;
    tomatoy = mouseY + tomatooffsetY;
  }

  //mushroom dragging logic
  if (mouseX > mushroomx && mouseX < mushroomx + mushroomw && mouseY > mushroomy && mouseY < mushroomy + mushroomh) {
    mushroomrollover = true;
  }
  else {
    mushroomrollover = false;
  }
  if (mushroomdragging) {
    mushroomx = mouseX + mushroomoffsetX;
    mushroomy = mouseY + mushroomoffsetY;
  }

  //oregano dragging logic
  if (mouseX > oreganox && mouseX < oreganox + oreganow && mouseY > oreganoy && mouseY < oreganoy + oreganoh) {
    oreganorollover = true;
  }
  else {
    oreganorollover = false;
  }
  if (oreganodragging) {
    oreganox = mouseX + oreganooffsetX;
    oreganoy = mouseY + oreganooffsetY;
  }

  //pepper dragging logic
  if (mouseX > pepperx && mouseX < pepperx + pepperw && mouseY > peppery && mouseY < peppery + pepperh) {
    pepperrollover = true;
  }
  else {
    pepperrollover = false;
  }
  if (pepperdragging) {
    pepperx = mouseX + pepperoffsetX;
    peppery = mouseY + pepperoffsetY;
  }
  //pepperoni dragging logic
  if (mouseX > pepperonix && mouseX < pepperonix + pepperoniw && mouseY > pepperoniy && mouseY < pepperoniy + pepperonih) {
    pepperonirollover = true;
  }
  else {
    pepperonirollover = false;
  }
  if (pepperonidragging) {
    pepperonix = mouseX + pepperonioffsetX;
    pepperoniy = mouseY + pepperonioffsetY;
  }

//ingredients location
  //pizza dough
  image(dough, windowWidth/2, windowHeight/2, 500, 500);
  //tomato
  image(tomato, tomatox, tomatoy, tomatow, tomatoh);
  //mushroom
  image(mushroom, mushroomx, mushroomy, mushroomw, mushroomh);
  //oregano
  image(oregano, oreganox, oreganoy, oreganow, oreganoh);
  //pepper
  image(pepper, pepperx, peppery, pepperw, pepperh);
  //pepperoni
  image(pepperoni, pepperonix, pepperoniy, pepperoniw, pepperonih);
}

//tomato mousePressed&mouseReleased
function mousePressed(){
  // Did I click on the rectangle?
  if (mouseX > tomatox && mouseX < tomatox + tomatow && mouseY > tomatoy && mouseY < tomatoy + tomatoh) {
    tomatodragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    tomatooffsetX = tomatox-mouseX;
    tomatooffsetY = tomatoy-mouseY;
  }

  if (mouseX > mushroomx && mouseX < mushroomx + mushroomw && mouseY > mushroomy && mouseY < mushroomy + mushroomh) {
    mushroomdragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    mushroomoffsetX = mushroomx-mouseX;
    mushroomoffsetY = mushroomy-mouseY;
  }

  if (mouseX > oreganox && mouseX < oreganox + oreganow && mouseY > oreganoy && mouseY < oreganoy + oreganoh) {
    oreganodragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    oreganooffsetX = oreganox-mouseX;
    oreganooffsetY = oreganoy-mouseY;
  }

  if (mouseX > pepperx && mouseX < pepperx + pepperw && mouseY > peppery && mouseY < peppery + pepperh) {
    pepperdragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    pepperoffsetX = pepperx-mouseX;
    pepperoffsetY = peppery-mouseY;
  }

  if (mouseX > pepperonix && mouseX < pepperonix + pepperoniw && mouseY > pepperoniy && mouseY < pepperoniy + pepperonih) {
    pepperonidragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    pepperonioffsetX = pepperonix-mouseX;
    pepperonioffsetY = pepperoniy-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  tomatodragging = false;
  mushroomdragging = false;
  oreganodragging = false;
  pepperdragging = false;
  pepperonidragging = false;
}
