let name: string = "John";
let age: number = 25;
let hobbies: string[] = ["Basketball", "Hockey"];

let stringOrNumber = "this is a string!";
console.log(typeof stringOrNumber);  // string

let numberOrNull: number | null;

// these assignments will work
numberOrNull = 3;
numberOrNull = null;

// this is not allowed in TypeScript
// numberOrNull = "invalid assignment";

// let: Declares a block-scoped variable, optionally initializing it to a value. let variables can be reassigned.
// const: Declares a block-scoped constant. Once assigned, const variables cannot be reassigned.

// variable
let age_: number = 25;
age_ = 26; // This is allowed with `let`.

//constant
const pi: number = 3.14;
// pi = 3.15; This would be an error because `pi` is a constant.

// BASIC TYPES
// Number: All numbers in TypeScript are floating-point values. These can be integers, decimals, etc.

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red'; // Both single and double quotes are acceptable.

// boolean
let isDone: boolean = false;

/*
Any: It can be any type of value. It is useful when you don't want to write a specific type,
but its use should be limited to when you really don't know what type there will be.
*/

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;