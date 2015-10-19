//////////////////*...........YOUR MISSION...........

//  Write a program that will convert a temperature from
//  fahrenheit to celsius, or from celsius to fahrenheit.

//  1. In the HTML, have one input field where someone can enter
//      in a temperature.
//  2. Create a radio button group where Celsius or Fahrenheit 
//      can be selected as the scale that the number should be 
//      converted to.
//  3. Create a block level element that will hold the text of the
//      converted temperature.
// 4. Create a button that, when clicked, displays the converted.
//  5. Create another button that, when clicked, clears any text
//      in the input field.
//  6. Add an event handler to the input field that checks if the 
//      user pressed the enter key, and if that happens, perform
//      the conversion.
//  7. If the temperature is greater than 90F/32C the color of 
//      the converted temperature should be red.
//  8. If the temperature is less than 32F/0C the color of 
//      the converted temperature should be blue.
//  9. For any other temperature, the color should be green.
//*/


var temperature = document.getElementById("tempEnter"); 

var tempToConvert = 0;

var convert = document.getElementById("clickToConvert");

var outConvert = document.getElementById("convertedTemp");

var clearInput = document.getElementById("clickToClear");

var conversion = "";

var textColor = "";

///// function to convert entered temp to Celsius
function toCelsius(tempToConvert) {
  conversion = (tempToConvert * (9 / 5)) + 32;
  conversion = Math.round(conversion);
  return conversion;  
}
///// function to convert entered temp to Fahrenheit
function toFahrenheit(tempToConvert) {
  conversion = (tempToConvert - 32) * (5 / 9);
  conversion = Math.round(conversion);
  return conversion;  
}

temperature.addEventListener("click", function(event) {
  if (temperature.value !== "") {
    tempToConvert = parseInt(temperature.value);
    console.log("temp to covert ", tempToConvert);
  }
});

//check to see if convert button has been clicked -- if clicked check for which converter button was clicked
convert.addEventListener("click", function(event) {
   document.getElementById("celsius").addEventListener("click", toCelsius);
   document.getElementById("fahrenheit").addEventListener("click", toFahrenheit);  
   if (conversion > 90) {
     textColor = ".red";
   }
     else if (conversion < 32) {
      textColor = ".blue";
     }
      else textColor = ".green";
   outConvert.innerHTML = "Converted Temperature is: <p class='" + "textColor'>" + conversion + "</p>" ;
   console.log("outconvert ", outConvert.innerHTML);
});   

clearInput.addEventListener("click", function(event) {
  document.getElementById("celsius").checked = false;
  document.getElementById("fahrenheit").checked = false;
  document.getElementById("clickToConvert").checked = false;
  temperature.innerHTML = "";
  outConvert.innerHTML = "";
  conversion = 0;
  return conversion;
});




