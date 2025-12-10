/* 
Abstract classes in TypeScript serve as a base class and cannot be instantiated. 
They can, however, be extended. 
Abstract classes can contain real implementation for some methods,
but they can also have abstract methods, which don't have an implementationin the
abstract class and must be implemented by any concrete (non-abstract) subclass.
*/

abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log('Moving...');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Bark!');
    }
}

const myDog = new Dog();

myDog.makeSound();  // Outputs: Bark!
myDog.move();       // Outputs: Moving...

// Your Circle and Rectangle class definitions here

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const myCircle: Circle = new Circle(5);
const myRect: Rectangle = new Rectangle(4, 7);

console.log(myCircle.area());
console.log(myRect.area());

class Point {
    constructor(private _x?: number, private _y?: number) {}

    draw() {console.log(this._x, this._y)}

    get x(): number | undefined {
        return this._x
        // return this.x ?? 0; Nullish coalescing for default value
    }
    
    get y() {return this._y}

    set x(value: number) {
        if (value == 0)
            throw new Error ("value cannot be 0.")

        this._x = value
        }
}

let point = new Point(12)

point.draw()