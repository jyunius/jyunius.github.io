
function Particle(x,y){
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D(); // particle movement
  // this.vel.setMag(random(2,5)); // vel variant
  this.acc = createVector();

  this.show = function(){
    stroke(255,5);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
  };

  this.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  };
  //
    // this.prev.x = this.pos.x;
    // this.prev.y = this.pos.y;
  // };
  //
  this.attracted = function(target){
    //var force = target - this.pos
    // var A = this.pos
    var force = p5.Vector.sub(target, this.pos);
    var d = force.magSq(); // distance
    // d = constrain(d,0.01,0.001); //각각의 속도

    // Universal Gravitational Constant = 6.67408 × 10-11 m3 kg-1 s-2
    var G = G*(G+1); //magnitude
    var strength = 0.01;//G / d; // 0.1 // Magnitude velocity = small
    force.setMag(strength);
    // force.mult(-1);
    // this.acc.add(force);
    this.acc = force;
  }

}
