/*
////////////////////////////////////////////////////////////////////////////////////////
WORKING WITH IMAGE ASSETS
+ ADDING TEXT ANIMATION
+ RESPONSIVENESS
 
Additional image asset added.
Press and hold mouse for surprise.

Demo by Prof Berkoy
////////////////////////////////////////////////////////////////////////////////////////
 */


//Create a p5.Image object to store image
let cupcake; //Declares p5.Image object called cupcake
let mouth; //Declares p5.Image object called mouth

//Creates variables for text animation
let opacity = 0;
let fade = 1;

//Creates variable for cupcake animation
let fall = 0;


//Load image assets into preload() to avoid asynchronous loading errors
function preload() {
	let path= "assets/"
	cupcake = loadImage(path + "cupcake.png"); //Assign image to variable using loadImage() 
	mouth = loadImage(path + "mouth.png");
	//Use preload() only to load assets-- nothing else!
}

//setup() is called AFTER preload() is complete and runs one time only
function setup() {
	createCanvas(500, 500);
	background(255);
	imageMode(CENTER); //draws images from center point
	textAlign(CENTER); //draws text from centerpoint
	textSize(88); //sets size of text
}

//draw() runs continuously after preload() and setup() are complete
function draw() {
	background(255);

	//text display and animation
	fill(opacity);
	text("YUM", width / 2, height / 2 - 50); //displays text
	opacity = opacity + fade;
	if (opacity > 255 || opacity < 0) {
		fade = -fade;
	}

	if (mouseIsPressed) {
		background(255);
		image(mouth, width / 2, height / 2);
		image(cupcake, width / 2, fall);
		if (fall < height / 2) {
			fall++;
		}
	} else {
		fall = 0;
	}

	print("opacity: " + opacity);
	print("fade: " + fade);
	print("fall: " + fall);
}