// falsy values 

/*
* false
* 0
* NaN (the "not a number" value)
* "" (empty string)
* [] (empty array)
* null
* undefined
*/

// All other values will be considered "truthy",
// meaning that when evaluated as a boolean expression, they will act as true.

// The || (logical OR) operator can be used to select the first non-falsy value. For example:

const bananas = 3;
const apples = 0;

// will be set to 3 since bananas is truthy
const numberOfBananasOrApples = bananas || apples;

const oranges = 0;
const pears = 4;

// will be set to 4 since oranges is falsy
const numberOfOrangesOrPears = oranges || pears;

// Using the double not operator combination (!!)
// To force a variable into it's boolean representation from either truthy or falsy to either true or false, use !! as follows:

// will be set to true because bananas is greater than zero

const atLeastOne = !!bananas || !!apples;