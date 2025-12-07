/* 
you can define a type that can be one of several types using a union type. 
This is beneficial when an entity can reasonably be one of several types.
*/

type StringOrNumber = string | number;

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

let alex: Person = {name: 'alex', age: 24};

console.log(alex)

type Car = {type: "car", doors: number};
type Bike = {type: "bike", hasBell: boolean};

type Vehicle =  Car | Bike;

function isCarOrBike (vehicle: Vehicle): void {
    console.log(vehicle.type)
}

let red_car: Vehicle = {type: "car", doors: 2};

isCarOrBike(red_car)

console.log("data")