/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

console.log("I am here");

function reversal(origString) {
  var reversedString = origString.split("").reverse().join("");  /*take every letter and make it an element in any array*/
  document.write(reversedString);

  
  return reversedString;
}

function alphabits(origString) {
  document.write("<div>" + origString.split("").sort().join("") + "</div>");
}

function palindrome(origString) {
  var newString = origString.replace(/[\s,]/g, "").toLowerCase();
  var reversedNewString = reversal(newString);

  if (newString === reversedNewString) {
    document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
  } else {
    document.write("<div>\"" + origString + "\" is not a palindrome</div>");
    
  }
}


var testString = "A car, a man, a maraca";

reversal(testString);
alphabits(testString);
palindrome(testString);

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");

planets.forEach(function(currentPlanet) {
	el.innerHTML += "<planets>" + currentPlanet + "</planets>";
});
console.log("el ", el);

// Use the map method to create a new array where the first letter of each planet is capitalized

var capPlanets = planets.map(function(currentPlanet) {
  return currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1);
});

console.log("capPlanets", capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(currentPlanet) {
	return currentPlanet.indexOf("e") > -1;
});

console.log("ePlanets", ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr) {
	return prev + "" + curr;
});

console.log("sentence", sentence + ".");



