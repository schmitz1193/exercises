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

var tempConvertSelect = "";

//////Set up cnverter switch

document.getElementById("celsius").addEventListener("click", function() {
  tempConvertSelect = "C";
});
document.getElementById("fahrenheit").addEventListener("click", function() {
  tempConvertSelect = "F";
});

///// function to convert entered temp to Celsius
function toCelsius(tempToConvert) {
  conversion = (tempToConvert * (9 / 5)) + 32;
  conversion = Math.round(conversion); 
  outConvert.innerHTML = conversion + "&deg; F";
  if (conversion < 32) {
     outConvert.classList.add("blue");
  }
  if (conversion > 32) {
    outConvert.classList.add("red");
    console.log("class", placeWhereTempGoes.classList);
  }
  if (conversion >= 0 && fahrenheit <= 32) {
    outConvert.classList.add("green");
    console.log("class is", outConvert.classList);
  }
  return outConvert.innerHTML;  
}
///// function to convert entered temp to Fahrenheit
function toFahrenheit(tempToConvert) {  
  conversion = (tempToConvert - 32) * (5 / 9);
  conversion = Math.round(conversion);
  outConvert.innerHTML = conversion + "&deg; F";
  if (conversion < 32) {
     outConvert.classList.add("blue");
  }
  if (conversion > 90) {
    outConvert.classList.add("red");
  }
  if (conversion >= 32 && fahrenheit <= 90) {
    outConvert.classList.add("green");
  }
  console.log("class is", outConvert.classList);
  return outConvert.innerHTML;  
}


// when convert button is pressed, convert text input to a number so the temp can be caculated.
temperature.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (temperature.value !== "") {
      tempToConvert = parseInt(temperature.value);
      console.log("temp to covert ", tempToConvert);
     }
    if (tempConvertSelect === "C") {
      toCelsius(tempToConvert);
    }
      else (toFahrenheit(tempToConvert));
    }
});


//when the clear input is checked all the buttons return to an unchecked or blank value
clearInput.addEventListener("click", function(event) {
  document.getElementById("celsius").checked = false;
  document.getElementById("fahrenheit").checked = false;
  convert.checked = false;
  clearInput.checked = false;
  temperature.value = "";
  outConvert.innerHTML = "";
  temperature.innerHTML = "";
});




