

// IIFE for SolarSystem
// Immediately invoked function expression
var SolarSystem = (function() {

  // This is the private sector
  var planets = ["Mercury", "Mars", "Venus", "Saturn", "Earth"];
  var landed = 1;
  var launchedSpacecraft = ["Hubble", "Rover"];
 
  //This is the public sector

  return {

  //public property for holding a last modified date
    modified: new Date (),

  //Getter for an array of planets in private sector
    getPlanets: function() {
      return planets;
    },
  //Getter/Setter for planets that have been landed on
    getlanded: function() {
      return landed;
    },
    setlanded: function(newLanded) {
     landed = newLanded;
    },
  //Getter/Setter for Spacecraft exploring - stored in private sector
    getlaunched: function() {
    return launchedSpacecraft;
    },
    setlaunched: function(newCraft) {
    launchedSpacecraft = launchedSpacecraft.push("newCraft");
    }
  };
})();

console.log(SolarSystem);

//////////Example from Curriculum

var Sedan = (function() {
  var color = "blue";
  var type = "sedan";

  return {
    manufacture_date: new Date(),
    getColor: function(color) {
      return color;
    },
    setColor: function(newColor) {
      color = newColor;
    },
    getType: function() {
      return type;
    }
  };
})();
Sedan.type = "minivan"; 
console.log(Sedan.getType());
console.log(Sedan);
