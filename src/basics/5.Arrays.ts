let names: string[] = ["Alice", "Bob", "Charlie"]; // array type syntax
let ids: Array<number> = [101, 102, 103]; // generic array type

/*
Arrays methods:

push(): Adds one or more elements to the end of an array.
unshift(): Inserts one or more elements at the beginning.
pop(): Removes the last element.
shift(): Removes the first element.
*/

let colors: string[] = ["red", "blue"];

colors.push("yellow");   // ["red", "blue", "yellow"]
colors.unshift("green"); // ["green", "red", "blue", "yellow"]
colors.pop();            // ["green", "red", "blue"]
colors.shift();          // ["red", "blue"]

console.log(colors)

// accesing|modifying elements

let fruits: string[] = ["apple", "orange", "grape"];

console.log(fruits[1]);     // "orange"

fruits[1] = "banana";       // ["apple", "banana", "grape"]

console.log(fruits)

// finding|existence

let pets: string[] = ["cat", "dog", "bird"];

console.log(pets.indexOf("cat"));    // 0
console.log(pets.indexOf("dog"));    // 1
console.log(pets.includes("fish"));  // false

// array length property

let digits: number[] = [1, 2, 3, 4, 5];
console.log(digits.length);   // 5

// Create an array of numbers named ages. 
// Initialize it with three values: 25, 30, and 35. 
// Add a new age, 20, to the start of the array.
//  Finally, remove the last age from the array.

let ages: number[] = [25, 30, 35]

console.log(ages)
ages.unshift(20)
console.log(ages)
ages.pop()
console.log(ages)



