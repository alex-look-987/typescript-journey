let x: [string, number]

x = ["hellow", 10]

function displayTuple (input: [string, number]): string {
    return "values of the tuple: " + input[0] + " and "+ input[1]
}

let displaResult: string = displayTuple(x)

console.log(displaResult)