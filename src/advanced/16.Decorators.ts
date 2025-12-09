
/* 
Not getting right away about decorators.
Lets dig in them later.
*/

function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @readonly
    greet() {
        return "Hello, " + this.greeting;
    }
}

const g = new Greeter("Alex");

console.log(g.greet());

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`${propertyKey} method called`);
        return originalMethod.apply(this, args);
    }
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const C = new Calculator();

let result: number = C.add(1, 4)

console.log(result)
