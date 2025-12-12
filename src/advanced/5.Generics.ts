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

/* 
Make sure that argument types can be manage within themselve
in order to do not fail in the operations are being done
*/

function updateUser <T, V> (oldUser: T, newUser: V): T & V {
    return {...oldUser, ...newUser} // this merges into one ...
}

function updateData <T, V, X> (oldUser: T, newUser: V, format: X): T & V & X {
    return {...oldUser, ...newUser, ...format}
}

function makeAdmin <T> (user: T): T {
    return {...user, admin: true}
}

let userAge = [55, 20]
let user1 = {name: 'Junior'}
let user2 = {age: 25, gender: 'M'}

console.log(updateUser(user1, userAge))
console.log(makeAdmin(user2))

