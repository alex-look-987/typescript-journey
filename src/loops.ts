// FOR LOOPS

// traditional
for (let i = 0; i < 5; i++) 
{
    console.log(i);
}

// FOR OF LOOP
// iterating over elements in arrays or other iterable objects.

const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits)
{
    console.log(fruit);
}

// FOR IN LOOP
// iterates over properties (keys) of objects. suitable for object property traversal.

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in person) {
  console.log(key, person[key as keyof typeof person]);
}


// WHILE LOOPS
// --------------------------------------------------- //

// while loop continues executing its block as long as its condition remains true.
// do...while loop ensures the block gets executed at least once before checking the condition.

let count = 0;

while (count < 3) {
    console.log(count);
    count++;
}

count = 0;

do {
    console.log(count);
    count++;
} while (count < 3);


// EXERCISE

const books: any = {
    "TypeScript Basics": "T. Author",
    "Advanced TypeScript": "A. Expert",
    "TypeScript Projects": "P. Builder"
};

for (let subject in books)
{
    console.log(subject, books[subject])
}