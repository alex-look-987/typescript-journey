// ARITHMETHIC OPERATORS

// addition
const sum: number = 5 + 3;  // 8

// substraction
const difference: number = 8 - 5;  // 3

// multiplication
const product: number = 4 * 7;  // 28

// division
const quotient: number = 20 / 4;  // 5

// Modulus (%): remainder of a division.
const remainder: number = 11 % 3;  // 2

// -------------------------------------------------------------------- //

// LOGICAL OPERATORS

/*
AND (&&): Returns true if both conditions are true.
OR (||): Returns true if at least one of the conditions is true.
NOT (!): Reverses the truthiness of the condition. (if not true/if not false)
*/

const isHome = true;
const inPajamas = false;
const wantsToEat = true;
const isBored = false;

// I should go outside if I am home, not in my pajamas, and 
// either I want to eat or I am bored

const shouldGoOutside = isHome && !inPajamas && (wantsToEat || isBored);

console.log(shouldGoOutside)

// -------------------------------------------------------------------- //

// COMPARISON OPERATORS

/*
Equal to (==): Checks if two values are equal.
Not equal to (!=): Checks if two values are not equal.
Strictly equal to (===): Checks if two values are equal in value and type.
Strictly not equal to (!==): Checks if two values are not equal in value and type.
Greater than (>): Checks if the value on the left is greater than the value on the right.
Less than (<): Checks if the value on the left is less than the value on the right.
Greater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.
Less than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.
*/

let number = 5;
const between = number > 5 && number < 7;
const numberIsNotZero = number !== 0;

// Declare two variables: a initialized to 5 and b initialized to 7. 
// Create a third variable c that stores the result of (a + b) * 3.

let a: number = 5;
let b: number = 7;

let c: number = (a+b) * 3

console.log(c)
