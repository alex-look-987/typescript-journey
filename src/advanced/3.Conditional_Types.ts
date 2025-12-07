type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";

type A = TypeName<string>;   // "string"
type B = TypeName<number>;   // "number"
type C = TypeName<boolean>;  // "boolean"
type D = TypeName<{a:1}>;    // "object"

type isString<T> = T extends string ? "Yes": "No";

type WrapInArray<T> = T extends string
    ? string[]
    : T extends number
        ? number[]
        : T[];

function wrap<T>(value: T): WrapInArray<T> {
    return [value] as any;
}

const a = wrap("hi");   // string[]
const b = wrap(5);      // number[]
const c = wrap(true);   // boolean[]

console.log(a, b, c)
console.log(typeof a, typeof b, typeof c)

/* this kinda works just to double check which possible types could handle smth */