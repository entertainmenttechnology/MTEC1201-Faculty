/*
///////////////////////////////////////////////////////////
 PLAYING WITH VARIABLES
 From demo exploring: 
 variables and data types, operators, and event functions
 
 Press mouse to change background color

 Demo by Prof Berkoy
 //////////////////////////////////////////////////////////
 */

//globally scoped variables outside of setup() and draw() can be used anywhere in the sketch
let number = 100; //creates number variable called number and assigns a value of 5
let ellipseHeight = 50; //creates a number variable called ellipseHeight and assigns a value of 0.5
let grow = 0.5; 
let xLocation=0; 

//variables for background color
let r=0;
let g=0;
let b=0;

function setup() { //runs one time only
	createCanvas(800, 800);
}

function draw() { //runs forever unless event function called
	background(r,g,b);
	ellipse(mouseX/2 ,mouseY-200, number, ellipseHeight + 250);
	rectMode(CENTER); //draws rectangle from center point instead of left corner
	//rect(x,y,width,height);
	rect(mouseX * 0.5,mouseY,grow,grow);
	
	//increment by 1, written 3 ways
	//grow= grow+1; //grow++; //grow+=1;
	
	//decrement by 1, written 3 ways
	//grow=grow-1;//grow--; //grow-=1;
	
	grow+=0.5; // same as grow= grow+0.5;
	ellipse(xLocation,400,100,100);
	xLocation+=1.5; // same as xLocation= xLocation + 1.5;
	
	//Use print() or console.log() to print to console
	//print(grow);
	//print(number);
	//console.log(grow);
	//print(xLocation);
}


function mousePressed(){ //code block runs one time only when mouse pressed then returns to draw()
	r+=20;
	g++;
	b+=4;
}

function keyPressed(){ //code block runs one time only when key pressed then returns to draw()
	//put something cool here to respond to the keyboard
}