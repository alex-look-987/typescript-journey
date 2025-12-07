
type ButtonSizes = "small" | "medium" | "large"

type Direction = "ascending" | "descending"

function getDirection (direction: Direction): string {
    if (direction === "ascending") {
        return "The order is set to ascending.";
    } else {
        return "The order is set to descending.";
    }
}

console.log(getDirection("ascending"));
console.log(getDirection("descending"));