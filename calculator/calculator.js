
//Create an HTML file that has two input fields to accept the two numbers to perform operations on.
//Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
//In your JavaScript, put an event listener on each of the buttons.
//Copy the code below an implement a basic calculator.
//When the user performs one of the operations, output the result to another DOM element of your choice.
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplier(inOne, inTwo) {
  product = inOne * inTwo;
  return product;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function add(inOne, inTwo) {
  sum = inOne + inTwo;
  return sum;
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

 function subtract(inOne, inTwo) {
   difference = inOne - inTwo;
   return difference
 }


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(inOne, inTwo) {
   quotient = inOne/inTwo;
   return quotient;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function calculations(inOne, inTwo, operation) {
  return operation(inOne, inTwo);
}

/* get inputted number values and use parse to make them integers */

 
/* Determine which box was checked, pass the input and call appropriate function */

document.getElementById("add").addEventListener("click", function() {
  var inOne = parseInt(document.getElementById("in-one").value);
  var inTwo = parseInt(document.getElementById("in-two").value);
console.log(inOne, inTwo);
  var answer = calculations(inOne, inTwo, add);
  return getElementById("answer").innerHTML = answer;
});

console.log("answer ", answer);













