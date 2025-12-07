
let someValue: any = "This is a string";
let strLength: number = (<string>someValue).length;
// Or using as-syntax
let strLengthAs: number = (someValue as string).length;

let data: any = "Hello, TypeScript!";

function getStringLength(value: any): number {

    return (value as string).length;
}

console.log(getStringLength(data));


// Example 2

/*
let phone = document.getElementById('phone') as HTMLInputElement;
let phoneAlt = <HTMLInputElement> document.getElementById('phone');
*/