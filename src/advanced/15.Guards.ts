type StringOrNumber = string | number

function typerIdentifier (object: any): number {
    if (typeof object === 'string') {
            return object.length
        } 
    else {
        return object ** 2
        }
}

let object: StringOrNumber = 10

let result: number = typerIdentifier(object)

console.log(result)