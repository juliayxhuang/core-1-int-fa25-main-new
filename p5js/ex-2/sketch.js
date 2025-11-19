// Define the global variables
var w = window.innerWidth;
var h = window.innerHeight;  

let orderInput;
let button;
let greeting;

function setup() {
  canvas = createCanvas(w, h);
  background(255);

  // Use the greeting variable to ask for the person's name.
  greeting = createElement('h2', 'What do you want to order?');
  greeting.position(20, 5);

  // Create the input and button in the canvas.
  orderInput = createInput();
  orderInput.position(20, 65);

  button = createButton('submit');
  button.position(orderInput.x + orderInput.width, 65);

  // Use the mousePressed() method to call the greet()
  // function when the button is pressed.
  button.mousePressed(greet);

  // Also call greet when input is changed and enter/return button is pressed
  orderInput.changed(greet);
}

function greet() {
  // Refresh the canvas background to clear any
  // previous inputs.
  background(255);

  // Connect the name variable to the input's value.
  let drink = orderInput.value();

  // Update the greeting to state the person's name.
  greeting.html(`Your ${drink} is being made!`);

  // Clear the input's value.
  orderInput.value('');
  
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(drink, 0, 0);
    pop();
  }
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}