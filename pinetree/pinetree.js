/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

var aline = '*';
var lineLength = 0;
var spaceLines = 0;
var treeLine = "";


var tree = function(height) {
  lineLength = (height * 2) - 1;

  for (var i = 1; i < (height); ++i) {

    spaceLines += (lineLength - 1)/2;
    console.log("spaceline", spaceLines);

    treeLine = spaceLines + aline + spaceLines;
console.log("treeline", treeLine);


      aline += "**"; 

        console.log("aline", aline); 

    };


};
 
var pinetree = tree(5);





/* 
var pinetree = [];
pinetree[height] = "*";

for (var j=0; j<pinettee.length; j++) {
  pinetree[j] = '';
  }
  for (var i =0; i<height; i++) {
  pinetree[height-1] = "*";
  pinetree[height+1] = '*';
   var pineOutput = pinetree.join("")
;
  }
}    */