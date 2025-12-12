
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

interface Computer {
    readonly name: string,
     ram: string,
    size?: number

    connect(adapter: string): void
}

let latitude: Computer

latitude = {
    name: "Latitude",
    ram: "32GB",
    size: 15,

    connect(adapter: string): void {
        console.log("Power On. Connected to adapter", adapter)
    }
}

latitude.connect("1")
console.log(latitude)

interface HttpConnection {
    createConnection(url: string): void
}

class MakeConnection implements HttpConnection {
    private headers: string[]
    private body: string

    constructor(headers: string[], body: string) {
        this.headers = headers
        this.body = body
    }

    createConnection(url: string): void {
        console.log("Connection created:", url)
    }

}

interface Building {
    color: string,
}

interface Apartment {
    number: number;
    floor: number
}

interface Patient {
    name: string
}

interface Client extends Patient, Apartment {
    rating: number
}

class Tenant implements Client, Building {
    rating: number;
    name: string;
    number: number;
    floor: number;
    color: string

    constructor(rating: number, name: string, number: number, floor: number, color: string) {
         
    }
}

interface Calculate {
    (x: number, y:number): number
}

let cal: Calculate;

cal = (x: number, y: number) => {
    return x + y
}

//console.log(cal(10, 5))