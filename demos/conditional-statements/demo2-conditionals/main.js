/*
/////////////////////////////////////////////////////////////
Another demo exploring conditional statements and random().
 
Click the mouse to change ellipse fill and movement.

Demo by Prof Berkoy
/////////////////////////////////////////////////////////////
*/



// global variables for ellipse
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;

// global variables for fill
let r = 0;
let g = 255;
let b = 0;

function setup() {
	createCanvas(700, 700);
	//start ellipse at canvas center
	x = width / 2;
	y = height / 2;
}

function draw() {
	background(0);
	fill(r, g, b);
	ellipse(x, y, 100, 100);

	//increment the x, y location
	x+= xMove; //same as x= x + xMove
	y+= yMove; // same as y= y = yMove

	//if x or y go beyond bounds of canvas, flip direction
	if (x > width || x < 0) {
		xMove = -xMove;
	}
	if (y > height || y < 0) {
		yMove = -yMove;
	}

	//print values to the console
	//print("x: " + x + " y: " + y + " xMove: " + xMove + " yMove: " + yMove);
}

//click mouse to return new random values for xMove and yMove
function mousePressed() {
	xMove = random(-10, 10);
	yMove = random(-10, 10);
	r = random(255);
	g = random(255);
	b = random(255);
}