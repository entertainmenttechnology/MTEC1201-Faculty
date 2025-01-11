/*
///////////////////////////////////////////
CONDITIONAL STATEMENTS

if (boolean test 1){
	statements; //runs if test1 true
   } else if (boolean test 2){
	statements; //runs if test2 true
   } else {
	statements; //runs if all tests false
  }
}	
	
Move mouse around to change shape output.
Press mouse to change background color.

Demo by Prof Berkoy
///////////////////////////////////////////
*/


let r = 255;
let g = 255;
let b = 255;

function setup() { //executes code one time only
	createCanvas(500, 500);
	rectMode(CENTER);
}

function draw() { //executes code continuously
	background(r, g, b); //0-255

	if (mouseX > width / 2) {
		fill(255, 0, 0); //r 0-255,g 0-255,b 0-255
		ellipse(width / 2, height / 2, 100, 100);
		print("boolean test 1 true!");
	} else if (mouseY > height / 2) {
		fill(0);
		rect(width / 2, height / 2, 100, 100);
		print("boolean test 2 true!");
	} else {
		//rect(x,y,width,height);
		fill(255);
		rect(width / 2, height / 2, 100, 100);
		print("all tests false!");
	}
}
	

function mousePressed() { //triggers one time only when mouse pressed
	//x= random(min,max);
	r = random(0, 255);
	g = random(50, 200);
	b = random(100, 255);

	print("r: " + r);
	print("g: " + g);
	print("b: " + b);
}