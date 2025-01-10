/*
///////////////////////////////////////////
 STATIC vs DYNAMIC:
 exploring: 
 setup() and draw()
 basic input: mouseX, mouseY

 Demo by Prof Berkoy
 ///////////////////////////////////////////
 */


// the code in setup block runs once

function setup() {
	createCanvas(800, 800);
	//background(255);
}


// the code in draw block runs repeatedly 

function draw() {
	background (200,200,200); // move this line to setup() and see what happens

	//static line 
	//line (0, 0, 400, 400); 

	//dynamic line
	line(0, 0, mouseX, mouseY);

	//adds ellipse following mouse
	ellipse(mouseX, mouseY, 50, 50);
}