// node dist/test.js when codes are compiled

// npm install -g ts-node typescript
// with ts-node src/test.ts for pre debugging process before compile

// Set Debugging
let age: number = 20;

if (age == 20){
    age+=10;}
    
console.log(age)

// Any Type
let sales = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

function render(document: any): void {
    console.log(document);
}

render(course)

// Arrays

let numbers: number[] = [];

// Tuple | fixed lenght arrays

let user: [number, string] = [1, 'alex look'];

/* Enum | same principle as python for in enumerate
but with constant variables
*/

const small = 1;
const medium = 1;
const large = 3;    

// PascalCase

const enum Size {Small = 1, Medium, Large};

let mySize: Size = Size.Medium;

console.log(mySize);

// Functions

let income: number;

function calculateTax(income: number, taxYear = 2022): number // void when does not return anything
{  
    if (taxYear == 2025)
        return income *10;

    return income * 5
}

income = calculateTax(10)

console.log('income tax', income)

// Objects | dont understand a shit

// <>

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void 
} = {
    id: 1, 
    name: 'alex look',
    retire: (date: Date) => {
        console.log(date)
    }
};

console.log(employee)

// ADVANCES TYPES //

// Type Aliases

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void}

let employee_test: Employee = {
    id: 1, 
    name: 'alex look',
    retire: (date: Date) => {console.log(date)}};

// Union

function kgToLbs(weight: number | string): number
{
    // Narrowing
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10))
console.log(kgToLbs('10'))

// Intersection | Note: need to dig into this stuff

type Draggable = {drag: () => void}
type Resizable = {rezise: () => void}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {drag: () => {}, rezise: () => {}}

// Literal (exact, specific)
/* smth like using 'ranges' of possible types 
of values within its own context*/

type Quantity = 50 | 100;
type Metric = 'cm' | 'inch';

let quantity: Quantity = 100;
let measure: Metric = 'cm'

// Nullable

function greet(name: string | null | undefined) 
{
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('no named asiggned');
}
    
greet(null)

// Optional Chaining

type Customer = {birthday?: Date}

function getCustomer (id: number): Customer | null {
    return id == 0 ? null: {birthday: new Date()}}

let customer = getCustomer(0)

// Optional property acces operator ?
console.log('customers birthday', customer?.birthday?.getFullYear())

// Optional element access operator
// customers?.[0]

// Optional call

//  let log: any = (message: string) => console.log(message)

let log: any = null

log?.('a');
