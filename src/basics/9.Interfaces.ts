
interface Dog {
    name: string;
    age: number;
    vaccinated?: boolean;
}

interface Car {
    model: string;
    year: number;
}

let myCar: Car = {
    model: 'Toyota',
    year: 2025,
} 

console.log(myCar.model)
console.log(typeof myCar)