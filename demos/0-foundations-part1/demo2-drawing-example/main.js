/*

////////////////////////////////////////////////////////////////////////////////
"I Dreamt of Two Trees and a Red Door" 

Introducing p5.js and drawing with algorithms, focusing on 2d primitives.

Demo by Prof Berkoy
////////////////////////////////////////////////////////////////////////////////

p5.js reference: https://p5js.org/reference/
Adobe Color for handy color selection: https://color.adobe.com/ 
*/


function setup() { // this code block runs one time only
	
	createCanvas(1280,720); //creates canvas size at 1280 pixel width, 720 pixel height
	rectMode(CENTER); //setting rectMode so that rectangles draw from center point
	background(57,139,139); // creates background color with r,g,b values
	
	//ground
	fill(190,224,225); //r,g,b values
	quad(20, 700, 200, 480, 1080, 480, 1250, 700); 
	
	//ellipse tree left
	fill(97,55,84);
	rect(325, 500, 20, 250);
	fill(242,209,217);
	ellipse(325,375,300,100);
	ellipse(325,325,200,75);
	ellipse(325,275,125,75);
	
	//triangular tree right
	fill(97,55,84);
	rect(1025, 475, 15, 200);
	fill(189,164,206);
	triangle(875, 550, 1025, 475, 1175, 550);
	triangle(925, 500, 1025, 425, 1125, 500);
	triangle(975, 450, 1025, 325, 1075, 450);
	triangle(980, 400, 1025, 50, 1070, 400);
	
	//mysterious red door at center
	fill(255,24,49);
	rect(640, 360, 125, 225);
	stroke(86,90,55);
	strokeWeight(15);
	point(675,360); //door knob
}

