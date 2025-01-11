/*
////////////////////////////////////////////////////////////////////////////////////////
MORE WITH IMAGE ASSETS

Switch between 2 images while using a 3rd variable as placeholder.
Press '1' and '2' key to switch between images.
 
Demo by Prof Berkoy
////////////////////////////////////////////////////////////////////////////////////////
 */


//Create a p5.Image object to store image
let cupcake;  //Creates a p5.Image object called cupcake
let donut; //Creates a p5.Image object called donut
let dessert; //Creates a p5.Image object called dessert

function preload(){
//Assign image asset to p5.Image object using loadImage() 
  let path= "assets/";
  cupcake= loadImage(path + "cupcake.png");
  donut= loadImage(path + "donut.png");
}

function setup() {
  createCanvas (500, 500);
  background (255);
  imageMode(CENTER); //draws images from center point
  dessert= cupcake; //assign cupcake image to dessert
}  

function draw() {
  background(255);  
  //display image with image() method
  image (dessert, width/2, height/2);
}

function keyPressed() {
  if (key=== '1') {
    dessert= cupcake;
  } else if (key=== '2') {
    dessert= donut;
  }
}
