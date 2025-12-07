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
