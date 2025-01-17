/*
////////////////////////////////////////////////////////////////
STATE CHANGES

Another demo on state changes...
 
Press 1, 2, or 3 key to change the animation scene / state.
 
(Note: using key press for state changes is a good strategy 
for early testing of program flow and functionality, before 
shifting to a more intuitive interactive experience for the user.)

Demo by Prof Berkoy
////////////////////////////////////////////////////////////////
*/


let scene=1; //creating state variable called scene
let expand=0; //used in scene 3 animation

function setup() {
  createCanvas (500, 500);
}

function draw() {
  background(0);
  if (scene!==3) {  //if scene does not equal 3
    expand=0;  //reset value of expand
  }
  if (scene===1) {
    doScene1();
  } else if (scene===2) {
    doScene2();
  } else if (scene===3) {
    doScene3();
  }
	print(scene);
}

function keyPressed() {
  if (key=== '1') {
    scene=1;
  } else if (key=== '2') {
    scene=2;
  } else if (key==='3') {
    scene=3;
  }
}

function doScene1() {
  ellipse(width/2, height/2, 100, 100);
}

function doScene2() {
  ellipse(width/2, height/2, 10, 10);
}

function doScene3() {
  //spiral animation
  translate(width/2, height/2);
  for (let i=0; i<200; i++) { // a preview of for loops, which we'll get into after the midterm!
    rotate(0.1);
    ellipse(i+expand, 0+expand, 10, 10);
  }
  expand+=0.2;
}