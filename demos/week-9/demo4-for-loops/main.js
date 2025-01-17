/*
/////////////////////////////////////////////////////////
MORE FOR LOOPS

The case of the forever falling ellipses.  

Demo by Prof Berkoy
/////////////////////////////////////////////////////////
*/


let y = 0;

function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(0);

	for (let x = 0; x <= width; x += 50) {
		ellipse(x, y, 50, 50);
	}

	y++; //y value of ellipse increments after we exit the for loop

	if (y >= height + 50) { //if y value reaches 50 pixels below canvas
		y = -50; //sets y value to 50 pixels above canvas
	}

	print("y=:  " + y); // printing to console
}