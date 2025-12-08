
interface Cirlce {
    kind: "circle";
    radius: number;}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Cirlce | Square;

function drawCircle (radius: number): number {return Math.PI * radius ** 2}

function drawSquare (sideLength: number): number {return sideLength ** 2}

function calculateArea (shape: Shape): number {

   switch (shape.kind) {
        case "circle":
            // here shape is of type Circle
            return drawCircle(shape.radius);
        case "square":
            // here shape is of type Square
            return drawSquare(shape.sideLength);
        }
}

const shapes: Shape[] = [
    {
        kind: "circle", 
        radius: 5
    }, 
    {
        kind: "square",
        sideLength: 10
    }
];

let shapeOne: Shape = shapes[0]!;

console.log(calculateArea(shapes[1]!))
console.log(calculateArea(shapeOne))

console.log(calculateArea({kind: "circle", radius: 2}))
console.log(calculateArea({kind: "square", sideLength: 3}))

console.log(shapes[0])
        
/* 

// example for getting a rendering context that has functions to draw 
// either a circle or a square using different functions

const context = ...


shapes.forEach((shape: Shape) => {
    // we cannot use shape.radius or shape.sideLength here
    // since the compiler doesn't know what type shape is yet

    switch (shape.kind) {
        case "circle":
            // here shape is of type Circle
            context.drawCircle(shape.radius);
            break;
        case "square":
            // here shape is of type Square
            context.drawSquare(shape.sideLength);
            break;
    }
});

 */