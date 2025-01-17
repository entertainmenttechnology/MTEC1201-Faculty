/*
///////////////////////////////////////////
GETTING TO KNOW p5.js
Demo by Prof Berkoy
///////////////////////////////////////////

Refer to the reference:
https://p5js.org/reference/
*/


//This is a comment-- use them to make your code more readable. 


function setup() { //must include the setup function to run. notice the closing curly brace at the end of the code block. 

	//Set parameters of canvas size with width and height
	createCanvas(800, 800);

	//If not set, the default display is 100 x 100 

	//changing the background with red, green, blue values 0-255
	background(255, 0, 50);

	//Making a line
	line(5, 5, 50, 60);

	//Set parameters of function with x,y coordinates for where to begin and end the line
	//line (x1, y1, x2, y2);

	//Let's make another line
	line(70, 0, 0, 70);


	//making a triangle
	//triangle (x1, y1, x2, y2, x3, y3);
	triangle(600, 300, 600, 600, 200, 400);

	//making a rectangle
	rect(200, 400, 400, 200);

	//quad
	quad(200, 200, 400, 200, 600, 600, 200, 300);

	//changing the fill color
	fill(200, 255, 50);

	//changing the stroke color
	stroke(10, 225, 235);

	//changing the stroke weight
	strokeWeight(20);

	//ellipse
	ellipse(400, 300, 200, 200);

	// A FEW MORE TIPS...
	//use noFill() to eliminate fill color 
	//use noStroke() to eliminate stroke color and weight
	//for fill() and stroke(), create an alpha channel to change transparency, using 4th color value 0-255

} // notice the closing curly brace here to complete the setup() block