// The message to be displayed
var message = "Campfire Tales - September 2018!";

var f;
// The radius of a circle
var r; 

var bg;

function preload() {
    f = loadFont("assets/Arial.ttf");
}

function setup () {
  bg = loadImage("assets/bonfire-night-forest-vector-large.png")
  createCanvas(windowWidth, windowHeight);
  textFont(f);
  textSize(60);
  // The text must be centered!
  textAlign(CENTER);
  smooth();
}

function draw () {
  background(bg);
  r = windowHeight * .4;

  // Start in the center and draw the circle
  translate(width / 2, height / 2);
  noFill();
  noStroke();
  ellipse(0, 0, r*2, r*2);
  stroke(255);

  // We must keep track of our position along the curve
  var arclength = 0.0;

  // For every box
  for (var i = 0; i < message.length; i++)
  {
    // Instead of a constant width, we check the width of each character.
    var currentChar = message.charAt(i);
    var w = textWidth(currentChar);

    // Each box is centered so we move half the width
    arclength += w/2;
    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    var theta = PI + arclength / r;    

    push();
    // Polar to cartesian coordinate conversion
    translate(r*cos(theta), r*sin(theta));
    // Rotate the box
    rotate(theta+PI/2); // rotation is offset by 90 degrees
    // Display the character
    fill(255);
    text(currentChar,0,0);
    pop();
    // Move halfway again
    arclength += w/2;
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}