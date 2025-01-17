/*
/////////////////////////////////////////////////////////
NESTED FOR LOOPS

MORE LOOPS!
NESTED LOOPS!
NESTED IFs!
 
Interaction:
Hover mouse over rectangle to display pattern.
Press and hold mouse to change background color.
 
->Want to dig further into nested loops? <-
Check out this video by Dan Shiffman: 
https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/4-loops/2-nested  

Demo by Prof Berkoy
/////////////////////////////////////////////////////////
*/


let r = 230; // r value for background rgb
let colorFade = 3; // for incrementing the r value

function setup() {
	createCanvas(1000, 200);
	rectMode(CENTER);
}

function draw() {
	background(r, 80, 80);

	// is mouse within boundaries of rectangle?
	if (mouseX > width / 2 - 25 && mouseX < width / 2 + 25 && mouseY > height / 2 - 25 && mouseY < height / 2 + 25) {
		if (mouseIsPressed) { // is mouse pressed?
			r += colorFade; // shorthand for r= r + colorFade
			if (r + colorFade > 255 || r + colorFade < 0) { // if added value > 255 or < 0
				colorFade = -colorFade; // flip increment, multiplies value by -1
			}
		}
		for (let y = 11; y < height; y += 22) { // first for loop!
			for (let x = 11; x < width + 10; x += 22) { // second for loop!
				for (let d = 21; d > 0; d -= 4) { // third for loop!
					fill(150, 80, 225);
					ellipse(x, y, d, d);
				}
			}
		}
	}

	fill(230, 80, 225);
	rect(width / 2, height / 2, 50, 50);
}