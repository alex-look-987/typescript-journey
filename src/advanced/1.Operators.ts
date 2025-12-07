let person = {name: "Alice", age: 28};

type Person = typeof person;
type PersonKeys = keyof Person;  // "name" | "age"

function updateProperty<T>(obj: T, key: keyof T, value: any): T {
    obj[key] = value;

    return obj;
}

console.log(updateProperty({name: "Alice", age: 28}, "age", "10"));