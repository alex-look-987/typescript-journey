// Defining

/*
Fields: These are variables within the class that store data.
Constructor: This is a special method used to initialize a new instance of the class.
Methods: Functions defined within the class to perform specific tasks.

*/

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

/*
Inheritance
TypeScript supports inheritance, allowing a new class (known as a subclass) to derive from an existing class (superclass).
The extends keyword facilitates this.

When a subclass extends a superclass, it inherits all properties and methods. However, it can also:

Add new properties or methods.
Override existing methods.
*/

class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`)
        
    }
}

let myDog: Dog = new Dog("Rex");
myDog.speak();

let myCat: Animal = new Animal('puffy');

myCat.speak()

class Person {
    constructor (protected id: number, private name: string) {
        }
}

class UsCitizen extends Person {
    constructor (id: number, name: string, private ssn: number) {
        super(id, name);
    }

    rename (newId: number) {
        this.id = newId 
    }
}

const Junior = new UsCitizen(143, "Alex", 3414)
console.log(Junior)

// Class Initialazers

class AnimalTest {
    especie = "generico";
}

class Perro extends AnimalTest {
    raza = "labrador";
}

// Composition instead of Inherentance 
class AnimalComp {
    constructor(public especie: string) {}
}

class Doog {
    base = new AnimalComp("perro");
    // no existe super, solo composición
}

// Getter / Setters
class Car {
    // Instances
    static NUM_OF_WHEELS = 4

    constructor (private make: string, private model: string) {
    }

    set carMake (value: string) {
        this.make = value
    }

    get carMake () {
        return this.make
    }

    static carStats(mile: number) {
        // Car.NUM_OF_WHEELS
        return {mileage: mile, type: 'Hybrid'}
    }
}

const acura = new Car('Acura', 'TL')

// Set
acura.carMake = 'etdete'

// Get
let brand: string = acura.carMake

// Instances
console.log(Car.NUM_OF_WHEELS)
console.log(Car.carStats(10))

// Abstract Class

/* 
Abstract classes are well most used as templates for root types (entities) in real life
- cars, animals, persons, computers, buildings, etc, etc,
*/

abstract class Animall {
    
    constructor(private name: string) {}

    abstract printSound(sound: string): void
}

class Dogg extends Animall {
    printSound(sound: string): void {
        // throw new Error("Method not Implemented.")
        console.log(sound)
    }
}

const blaki =  new Dogg('blaki')

blaki.printSound("Barking!")