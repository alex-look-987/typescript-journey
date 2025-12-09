/* 
Design pattern that allows you to 
compose behaviors from multiple source objects into a new object. 
This pattern can be achieved by combining multiple classes to form a new class. 
It's a way of reusing multiple class functionalities to form a new unique class.

NOTE: implementatio only occurs at type system level which requieres manually
implementen methods with a applyMinxs function.
*/

// Disposable Mixin
class Disposable {
    isDisposed: boolean = false;

    dispose() {
        this.isDisposed = true;
    }
}

// Activatable Mixin
class Activatable {
    isActive: boolean = false;

    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

class Logger {
    log (message: string) {
        console.log(message)
    }
}

class LoggedActivatable extends Activatable implements Logger {
    // Logger

    log: (message: string ) => void;

    // Override activate/deactivate

    activate(): void {
      super.activate();
      this.log("Activating...");
    }

    deactivate(): void {
        super.deactivate();
        this.log("Deactivating...");
    }
}

// The combined class
class SmartObject implements Disposable, Activatable {
    // Disposable
    isDisposed: boolean = false;

    dispose: () => void;

    // Activatable
    isActive: boolean = false;

    activate: () => void;
    deactivate: () => void;

    constructor() {
        setInterval(() => console.log(`Active: ${this.isActive}, Disposed: ${this.isDisposed}`), 500);
    }

    interact() {
        this.activate();
    }

}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(SmartObject, [Disposable, Activatable]);
applyMixins(LoggedActivatable, [Logger]);

// let test = new SmartObject

let logSystem = new LoggedActivatable

logSystem.activate()

/* 

test.interact()
test.dispose()
test.deactivate()

 */