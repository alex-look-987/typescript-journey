// let's import the implementations from the modules
import { add as notMyAdd } from './math';
import NotMyComponent from './Component';

// these are the local implementations in main.ts
function add(x: number, y: number): number {
    return x + y;
}

function Component(): string {
    return "hello!";
}

console.log(NotMyComponent)