// The message to be displayed
var message = "text along a curve";

var f;
// The radius of a circle
var r = 100.0;

function preload() {
    f = loadFont("Georgia",40,true);
}

function setup () {
  createCanvas(320, 320);
  textFont(f);
  // The text must be centered!
  textAlign(CENTER);
  smooth();
}

function draw () {
  background(255);

  // Start in the center and draw the circle
  translate(width / 2, height / 2);
  noFill();
  stroke(0);
  ellipse(0, 0, r*2, r*2);

  // We must keep track of our position along the curve
  var arclength = 0.0;

  // For every box
  for (var i = 0; i < message.length(); i++)
  {
    // Instead of a constant width, we check the width of each character.
    var currentChar = message.charAt(i);
    var w = textWidth(currentChar);

    // Each box is centered so we move half the width
    arclength += w/2;
    // Angle in radians is the arclength divided by the radius
    // Starting on the left side of the circle by adding PI
    var theta = PI + arclength / r;    

    pushMatrix();
    // Polar to cartesian coordinate conversion
    translate(r*cos(theta), r*sin(theta));
    // Rotate the box
    rotate(theta+PI/2); // rotation is offset by 90 degrees
    // Display the character
    fill(0);
    text(currentChar,0,0);
    popMatrix();
    // Move halfway again
    arclength += w/2;
  }
}