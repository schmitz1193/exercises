//Augment module for SolarSystem

var SolarSystem = (function(Input) {
  var closeSunStars = ["closeStar", "closerStar", "closestStar"];
  var earthYrAge = "Billions";
  var unknownDwarfPlanet = ["unknown1", "unknown2", "unknown3"];

//Getter for an array of closest 5 stars to the Sun.
  Input.getcloseSunStars = function() {
    return closeSunStars;
  },
//Getter-setter for the estimated age of the solar system in earth years.
  Input.getearthYrAge = function() {
    return earthYrAge;
  },
  Input.setearthYrAge = function(newAge) {
    earthYrAge = newAge;
  },
//Getter/-etter for array of known dwarf planets.
  Input.getunknownDwarfPlanet = function() {
    return unknownDwarfPlanet;
  },
 Input.setunknownDwarfPlanet = function(newunknownDwarfPlanet) {
    unknownDwarfPlanet = unknownDwarfPlanet.push("newunknownDwarfPlanet");
  };

  return Input;

})(SolarSystem);

  
