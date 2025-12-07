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

// Nullish Coalescing operator (??)

/*
TypeScript allows to return a "fallback" value if the left side of the operator is either null or undefined. 
OR operator || but will choose the right value only if the left side is either null or undefined, 
whereas the || operator will choose the left side only if the value is truthy.
*/


// will be set to 0 since apples is a number
const applesOrOranges = apples ?? oranges;

// will be set to 3 since apples is falsy
const numberOfApplesOrOranges = apples || oranges;


let a = null;
const b = undefined;
const c = 7;

const first = a ?? b ?? c

console.log(first)

a = 0

const test = a ?? c

console.log(test)

/*
|| cualquier falsy: quiero que si el usuario ingresa "", false, 0, etc. se use el fallback

?? cuando sí quieres aceptar 0, false o "" como valores válidos

* configuraciones numéricas
* flags booleanos
* valores de entrada donde 0 es válido (paginación, índices, precios, cantidades)
* argumentos opcionales
*/