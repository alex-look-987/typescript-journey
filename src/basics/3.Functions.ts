
// regular function
function add(a: number, b: number): number 
{
    return a + b;
}

// arrow function
const arrow_sum = (a: number, b: number): number => {return a + b;}

const arrow_add = (a: number, b: number): number => a + b;

function multiply(a: number, b: number): number {return a * b;}

let func_add: number = add(1, 2);
let func_sum: number = arrow_sum(1, 2);
let func_add_: number = arrow_add(1, 2);

let height: number = 10;
let weigth: number = 10;

let result: number = multiply(height, weigth)

console.log(func_add)
console.log(func_sum)
console.log(func_add_)
console.log(result)

// Rest Parameters

function printNames (firstName: string, ...allTheRest: string[]): string {
    return firstName + " " +  allTheRest.join(" ")
}

let names = printNames("alex", "look", "987")

console.log(names)

// Function Overloading

function addValues (val1: number, val2: number): number;

function addValues (val1: string, val2: string): string;

function addValues (a: any, b: any): any {return a + b}

