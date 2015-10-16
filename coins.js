/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

Initialize a JavaScript object to hold the coins 

*/
quarterDec = 0;
numQuarters = 0;
numQuartersVal = 0;
dimeDec = 0;
numDimes = 0;
numDimesVal = 0;
nickelDec = 0;
numNickel = 0;
numNickelVal = 0;
penneyDec = 0;
numPenney = 0;

 /*  var coinPurse.quarters = 0;  */

function coinCounter (dollars) { 

    var coinPurse = {
    	quarters: 0,
    	dimes: 0,
    	nickels: 0,
    	pennies: 0
    };	


 	quarterDec = dollars/(.25);
    numQuarters = Math.floor(quarterDec);
 	numQuartersVal = numQuarters * .25;

 	dimeDec = (dollars - numQuartersVal)/.10;
 	numDimes = Math.floor(dimeDec);
 	numDimesVal = numDimes * .10;

 	nickelDec = (dollars - (numDimesVal + numQuartersVal))/(.05);
    numNickel = Math.floor(nickelDec);
 	numNickelVal = numNickel * .05;

 	penneyDec = (dollars - (numDimesVal + numQuartersVal + numNickelVal))/.01;
 	numPenney = Math.floor(penneyDec)
 
	coinPurse.quarters = numQuarters;
	coinPurse.dimes = numDimes;
	coinPurse.nickels = numNickel;
	coinPurse.pennies = numPenney;

	return coinPurse;
} 

var coins = coinCounter(0.67);


console.log("coins",coins);