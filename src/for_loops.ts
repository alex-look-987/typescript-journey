// FOR LOOPS

// explanation

/* 
* Initialization: to set start of iterator
    - let i = 10;
    - let i = 0;
* Condition: defines when loop should stop
    - i < 15
    - i < animals.length
    
* Updation: how update iteraton at end of each iteration
    - i++
*/

// TRADITIONAL ONES
for(let i = 10; i < 15; i++) 
{
    // This statement is repeated
    console.log(i);
}

let animals = ['cat', 'dog', 'lion', 'wolf', 'deer']

for(let i = 0; i < animals.length; i++)
{
    // Prints i-th element of the array
    console.log(animals[i]);
}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //

// FOR OF LOOP
// direct iteration through the variable/object | returns values

for(let i of animals) 
{
    
    // Print each element of the array
    console.log(i);
}

let someArray = [1, "string", false];

for (let entry of someArray)
    {
        console.log(entry); // 1, "string", false
    }
    
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| //
    
// FOR IN LOOP
// iterator through the variable/object | returns index positions

for(let i in animals) 
{
    // Print each element of the array
    console.log(i, animals[i]);
}
    
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // 4, 5, 6
}

let pets = new Set(["Cat", "Dog", "Hamster"]) as any;
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}
for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}