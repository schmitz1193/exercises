/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

var Make = function() {
  this.makeName = "Mazada";
};

/*
Create a function, Model, to hold the 
corresponding property and value
*/

var Model = function() {
  this.modelName = "Mazda3";
};

// Definethe prototype chain of a Model?
Model.prototype = new Make ();

// Define a Car

var Car = function(carColor) {
  this.Color = carColor;  
};

// Define the prototype of a Car?

Car.prototype = new Model();

// Create the first car
var myCar = new Car("grey");

console.log("myCar ", myCar);

// Create the second car

var MarkCar = new Car("red");
console.log("MarkCar ", MarkCar);

// Create the third car
var AndreaCar = new Car("black");
console.log("AndreaCar ", AndreaCar);