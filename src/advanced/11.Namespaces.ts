
/* 
Namespaces are a way of logically grouping related code. 
This is a logical organization and doesn’t affect the runtime in any way.

* no import/export.
* avoid contaminated globas
* group functions and types without modules
* namespace merging.
* legacy libraries or global scripts
* migrate incrementally from old JS to TS

*/

namespace MyNamespace {
    export const myValue: number = 10;
}

namespace Geometry {
    export function areaOfRectangle (b: number, h: number) : number {
        return b * h
    }

    export function areaOfCircle (r: number): number {
        return Math.PI * (r ** 2)
    }
}

console.log(Geometry.areaOfRectangle(10, 5));
console.log(Geometry.areaOfCircle(7));