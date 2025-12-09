type Rectangle = {
    width: number, 
    heigth: number
}

function areaOfRectangle (object: Rectangle): number {
    return object.width * object.heigth 
}

let rectangle: Rectangle = {
    width: 8,
    heigth: 3
}

let resultArea: number = areaOfRectangle(rectangle)

console.log(resultArea)