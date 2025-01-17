/*
/////////////////////////////////////////////////////////
FOR LOOPS

Drawing a series of rectangles nested within each other. 

Demo by Prof Berkoy
/////////////////////////////////////////////////////////
*/


function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
}


function draw() {
	background(255);
	for (let i = width; i >= 0; i -= 50) {
		rect(width / 2, height / 2, i, i);
	}
}