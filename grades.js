//Use console.log to output the following criteria:

//How many of each grade?
//What is the lowest grade?
//What is the highest grade?

//Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

//A score between 50-60 is an F
//A score between 61-70 is a D
//A score between 71-80 is a C
//A score between 81-90 is a B
//A score between 91-100 is an A
//Start with array of random scores in your JavaScript


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var currentgrade = "";

// set up counters for grade levels

var gradeACount = 0;
var gradeBCount = 0;
var gradeCCount = 0;
var gradeDCount = 0;
var gradeFCount = 0;

// establish low and high grades

var lowGrade = 10000;
var highGrade = 0;

for (var i = 0; i < scores.length; i++) {
  if  (scores[i] > 90) {
  	gradeACount = gradeACount + 1;
  	if (scores[i] > highGrade) {
  		highGrade = scores[i];
  	}
  }
  if  ((scores[i] < 91) && (scores[i] > 80)) {
  	gradeBCount = gradeBCount + 1;
  }
  if  ((scores[i] < 81) && (scores[i] > 70)) {
  	gradeCCount = gradeCCount + 1;
  }
  if  ((scores[i] < 71) && (scores[i] > 60)) {
  	gradeDCount = gradeDCount + 1;
  }
  if  (scores[i] < 61) {
  	gradeFCount = gradeFCount + 1;
  	if (scores[i] < lowGrade) {
  		lowGrade = scores[i];
  	}
  }
}


console.log(highGrade, " is the highest grade.")

console.log(lowGrade, " is the lowest grade.")

console.log(gradeACount, "scores of A");
console.log(gradeBCount, "scores of B");
console.log(gradeCCount, "scores of C");
console.log(gradeDCount, "scores of D");
console.log(gradeFCount, "scores of F");







