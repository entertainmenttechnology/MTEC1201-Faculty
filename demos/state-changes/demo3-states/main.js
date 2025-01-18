/*
////////////////////////////////////////////////////////////////
STATE CHANGES

Another demo on state changes...
 
Combines past demo sketches with new hover and button triggers
  and added state variables.

Hover on the circle or click on the square.
Press any key to restart.
 
Demo by Prof Berkoy
////////////////////////////////////////////////////////////////
*/


let scene = "start";

// ball scene variables
let x = 0;
let y = 0;
let xMove = 0;
let yMove = 0;
let r = 0;
let g = 255;
let b = 0;


function setup() {
	createCanvas(1280, 720); //creates canvas size at 1280 pixel width, 720 pixel height

	//ball scene
	x = width / 2;
	y = height / 2;
}

function draw() {
	if (scene === "start") {
		doStartScene();
	} else if (scene === "theRedOne") {
		doRedScene();
	} else if (scene === "theBlueOne") {
		doBallScene();
	}

	print(scene);
}

function mousePressed() {
	if (scene === "start") {
		if (mouseX > 200 && mouseX < 300 && mouseY > 300 && mouseY < 400) {
			scene = "theRedOne";
		}
	} else if (scene === "theBlueOne") {
		//ball scene
		xMove = random(-10, 10);
		yMove = random(-10, 10);
		r = random(255);
		g = random(255);
		b = random(255);
	}
}


function doStartScene(){
	background(255);
	fill(255);
	strokeWeight(1);
	
	//draw square button
		rectMode(CORNER);
		rect(200, 300, 100, 100);
    textAlign(CENTER);
    fill(0);
    textSize(24);
    text("click me", 250, 350);

		//draw ellipse for rollover
		ellipse(100, 150, 50, 50);

		//check for rollover
		if (mouseX > 75 && mouseX < 125 && mouseY > 125 && mouseY < 175) {
			scene = "theBlueOne";
		}
}


function doBallScene() {

	background(0);
	fill(r, g, b);
	ellipse(x, y, 100, 100);

	//increment the x, y location
	x += xMove; //same as x= x + xMove
	y += yMove; // same as y= y = yMove

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


function doRedScene() {
	background(57, 139, 139); // creates background color with r,g,b values
	strokeWeight(1);
	fill(0);
	rectMode(CENTER); //setting rectMode so that rectangles draw from center point

	//ground
	fill(190, 224, 225); //r,g,b values
	quad(20, 700, 200, 480, 1080, 480, 1250, 700);

	//ellipse tree left
	fill(97, 55, 84);
	rect(325, 500, 20, 250);
	fill(242, 209, 217);
	ellipse(325, 375, 300, 100);
	ellipse(325, 325, 200, 75);
	ellipse(325, 275, 125, 75);

	//triangular tree right
	fill(97, 55, 84);
	rect(1025, 475, 15, 200);
	fill(189, 164, 206);
	triangle(875, 550, 1025, 475, 1175, 550);
	triangle(925, 500, 1025, 425, 1125, 500);
	triangle(975, 450, 1025, 325, 1075, 450);
	triangle(980, 400, 1025, 50, 1070, 400);

	//mysterious red door at center
	fill(255, 24, 49);
	rect(640, 360, 125, 225);
	stroke(86, 90, 55);
	strokeWeight(15);
	point(675, 360); //door knob
}

function keyPressed(){
	scene= "start";
}