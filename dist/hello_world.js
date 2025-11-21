"use strict";
// node dist/test.js when codes are compiled
Object.defineProperty(exports, "__esModule", { value: true });
// npm install -g ts-node typescript
// with ts-node src/test.ts for pre debugging process before compile
// Set Debugging
let age = 20;
if (age == 20) {
    age += 10;
}
console.log(age);
// Any Type
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
function render(document) {
    console.log(document);
}
// Arrays
let numbers = [];
// Tuple | fixed lenght arrays
let user = [1, 'alex look'];
/* Enum | same principle as python for in enumerate
but with constant variables
*/
const small = 1;
const medium = 1;
const large = 3;
// PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
// Functions
let income;
function calculateTax(income, taxYear = 2022) {
    if (taxYear == 2025)
        return income * 10;
    return income * 5;
}
income = calculateTax(10);
console.log('income tax', income);
// Objects | dont understand a shit
// <>
let employee = {
    id: 1,
    name: 'alex look',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
let employee_test = {
    id: 1,
    name: 'alex look',
    retire: (date) => {
        console.log(date);
    }
};
// Union
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
let textBox = {
    drag: () => { },
    rezise: () => { }
};
// Literal
//# sourceMappingURL=hello_world.js.map