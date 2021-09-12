
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();

}
// 1. Change the canvas values and increase the size of the canvas.
// 2. Create a variable i.e. ball.
// 3. In setup(), create a balls_option variable and assign properties.
// 4. Make sure you set the density of the paper to 1.2 as shown below.
// 5. The ball object will be the moving object in the game.
// 6. You have to create a circular body for the ball and add it to the World.
// 7. Create a blueprint for the Ground, on which the trash can stands, and the crumpled paper ball may fall on
   // To display ground on the canvas create a display() in the ground.js class.
// 8. Call display() inside draw().
// 9. To create a bucket create two more objects for ground class i.e. leftSide and rightSide.
// 10. Call display() of ground.js with leftSide and rightSide class.
// 11. Make the crumpled paper ball jump and fall into the bucket with the up arrow key.


