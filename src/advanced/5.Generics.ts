/* 
Generics provide a way to make components work
over a variety of types rather than a single one.

FUNCTIONS FOR TYPES: makes this works for any type 
but keep given type and use in a safe way
*/

function echo<T>(arg: T): T {
    return arg;
}

function wrapInArray<T> (value: T): T[] {

    return [value];

}

console.log(wrapInArray(42))