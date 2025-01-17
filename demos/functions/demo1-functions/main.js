/*
///////////////////////////////////////////
USER-DEFINED FUNCTIONS

FUNCTIONS HAVE THREE PARTS:
  *The word "function"
  *Function name
  *(Optional) parameters
  
  function functionName (optional parameters){
    statements;
  }

Demo by Prof Berkoy
///////////////////////////////////////////
*/


function setup() {
	createCanvas (500, 500);
	textAlign(CENTER);
	textSize(22);
  }
  
  function draw() {
	background (255);
	//call up the icecream function with different arguments
	icecream(50, 200, 65, 170, 230, 180, "MINT!"); //mint flavor
	icecream(200, 150, 75, 245, 120, 200, "BUBBLE GUM!"); //bubble gum flavor
	icecream(350, 300, 80, 80, 190, 230, "BLUE MOON!");  //blue moon flavor
  }
  
  
  function icecream(x, y, diameter, r, g, b, flavor) {  
	fill(170, 120, 35); //brown cone color 
	triangle(x, y, x+50, y, x+25, y+100);
	fill (r, g, b); //customized ice cream color
	ellipse(x+25, y, diameter, diameter);
	text(flavor, x+25, y-50);
  }