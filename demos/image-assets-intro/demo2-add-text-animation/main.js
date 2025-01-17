/*
////////////////////////////////////////////////////////////////////////////////////////
WORKING WITH IMAGE ASSETS
+ ADDING TEXT ANIMATION
 
Notice in this example that "cupcake.png" is added to new subfolder named "assets", 
for better organization. In this case, the correct path to find the file must be named.

Demo by Prof Berkoy
////////////////////////////////////////////////////////////////////////////////////////
 */


//Create a p5.Image object to store image
let cupcake; //Declares p5.Image object called cupcake

//Creates variables for text animation
let opacity = 0;
let fade = 1;


//Load image assets into preload() to avoid asynchronous loading errors
function preload() {
	let path= "assets/";
	cupcake = loadImage(path + "cupcake.png"); //Assign image asset to p5.Image object using loadImage() 
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

	//display image with image() 
	//image (name of image, x location, y location);
	image(cupcake, width / 2, height / 2); // center cupcake

	//optionally add 4th and 5th parameters to adjust size
	//image (name of image, x location, y location, width, height);
	//optionally call .width and .height to return original size 
	image(cupcake, width / 4, height - height / 3, cupcake.width / 2, cupcake.height / 2); //left cupcake
	image(cupcake, width - width / 4, height - height / 3, cupcake.width / 2, cupcake.height / 2); //right cupcake
}