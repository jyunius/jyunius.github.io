var attractor;
var particles = [];

var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('JSON data archive.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //CSV
  // for (let r = 0; r < table.getRowCount(); r++){
  //   const period = table.getString(r,"Period");
  //   var subject = table.getString(r,"Subject");
  //   var hour = table.getNum(r,"Hours");
  //
  //   text(subject, mouseX, mouseY);
  //   // for (let c = 0; c < table.getColumnCount(); c++) {
  //   //   print(table.getString(r, c));
  //   }

  // particles
  for (var i = 0; i < 120; i++) { //particle amount
    particles.push(new Particle(windowWidth/2, windowHeight/2)); // particle location
  }



  // attractors
    // attractors.push(createVector(200,200));
    attractor = createVector(windowWidth/2, windowHeight/2);

  frameRate(200);
  background('#1B1931');
}

function draw() {
  // put drawing code here

  stroke('#f0dc29');
  strokeWeight(4);
  point(attractor.x, attractor.y);

  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i]
    particle.attracted(attractor);
    particle.update();
    particle.show();
  }


}

function mousePressed(){
  for (let r = 0; r < table.getRowCount(); r++){ //table.getRowCount()
    var period = table.getString(r,"Period");
    var subject = table.getString(r,"Subject");
    var hour = table.getNum(r,"Hours");
    var size = map(hour,15,160,3,70);
    var opacity = map(hour,15,160,0,100);

    fill(random(0,255),random(0,255),random(0,255),opacity);
    circle(mouseX,mouseY,size);
    text(subject, mouseX, mouseY-size);
    textAlign(CENTER);
    // for (let c = 0; c < table.getColumnCount(); c++) {
    //   print(table.getString(r, c));
    }
  attractor = createVector(mouseX,mouseY);
  noStroke();


  // text(subject, mouseX+10, mouseY);
}

// function mousePressed(){
//   attractor = createVector(mouseX,mouseY);
//   point(attractor.x, attractor.y);
//   text('Cy Yoon Life', mouseX+10, mouseY);
//
//   for (var i = 0; i < particles.length; i++) {
//     var particle = particles[i]
//     particle.attracted(attractor);
//     particle.update();
//     particle.show();
//   }
// }
