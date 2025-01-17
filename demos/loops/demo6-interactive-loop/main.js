/*
////////////////////////////////////////////////////////////////////////////////////////
INTERACTIVE LOOPS

How can we create interaction with a for loop?
Answer: You can sneak a conditional statement into that for loop!
 
In this example, each individual circle within the line changes color with mouse hover.

Demo by Prof Berkoy
/////////////////////////////////////////////////////////////////////////////////////////
*/


function setup() {
	createCanvas(700, 700);
}

function draw() {
	background(0);

	for (let i = 0; i < width; i += 30) {
		if (mouseX > i - 15 && mouseX < i + 15 && mouseY > height / 2 - 15 && mouseY < height / 2 + 15) {
			fill(30, 200, 200);
		} else {
			fill(255);
		}
		ellipse(i, height / 2, 30, 30);
	}

}