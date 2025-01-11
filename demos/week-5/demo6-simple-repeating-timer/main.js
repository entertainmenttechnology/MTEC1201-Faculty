/*
////////////////////////////////////////////////////////////////////////////////////////
SIMPLE REPEATING TIMER

Ellipse moves and changes color every 2 seconds (2000 milliseconds).

Demo by Prof Berkoy
////////////////////////////////////////////////////////////////////////////////////////
*/


let timer = 2000; //setting up timer variable for 2000 millisecond trigger
let currentTime = 0; //tracking millis() clock
let savedTime = 0; // temp saved times, needed for comparison
let ellipseX = 0; //variable for x value of ellipse


function setup() {
	createCanvas(500, 500);
}

function draw() {
	currentTime = millis(); //update currentTime in draw so that it is continuously updating
	background(255);
	ellipse(ellipseX, height / 2, 100, 100);

	//if 2 seconds have passed since last saved time, execute code block
	if (currentTime - savedTime > timer) {
		if (ellipseX > width) {
			ellipseX = 0;
		} else {
			ellipseX += 20; //increment ellipseX value by 20
		}
		fill(random(255), random(255), random(255)); //change fill to random color
		savedTime = currentTime; //assign value of currentTime to savedTime
	}
	
	print("currentTime: " + int(currentTime));
	print("savedTime: " + int(savedTime));
}