/* 
TypeScript offers an array of utility types that can transform 
existing types in various ways, enhancing flexibility and ensuring type safety. 

Partial and Required stand out as especially beneficial for developers.

The Partial utility type makes all properties of a provided type optional.
This can be helpful in situations where you might not have values for all properties
of a type, such as when dealing with updates or partial data fetches.
*/

type Point = {
    x: number;
    y: number;
};

type PartialPoint = Partial<Point>;

/* 
With PartialPoint, both x and y properties become optional, 
so you can have objects like { x: 10 } or { y: 5 } or even {} 
without any type errors.

Conversely, the Required utility type does the opposite of Partial.
It ensures that all properties of a given type are required. 
It can be particularly useful when you have a type with optional
properties but then need to ensure a complete object for certain operations. */

// Solution: Define CompletePoint using Required on PartialPoint
type CompletePoint = Required<PartialPoint>;

const point: CompletePoint = {
    x: 10,
    y: 4
}
