var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)

var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById(boy-bands);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById(vegetables);

//this is the output for bands
var bandoutput = "";

// this is the output for vegetables
var vegetablesoutput = "";

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	currentBand = bands[loopTracker];
	currentVeggie = [loopTracker];

	bandoutput = "<div>" + currentBand + "<div";

	vegetableoutput = "<div" + currentVeggie + "<div>";
}

  // Add the band names into the correct <div>
  currentBand = band.HTML;


  // Add the veggie names into the correct <div>
  currentVeggie = vegetables.HTML;

}

console.log("Current Band", currentBand);
bandElement.innerHTML = bandoutput;
console.log("current Vegetables", vegetablesoutput);
veggieElement.innerHTML = vegetableoutput;



