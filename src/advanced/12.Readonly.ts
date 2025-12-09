type Point = {
    x: number;
    y: number;
};

type ReadonlyPoint = Readonly<Point>;

function modifyReadonlyPoint(point: ReadonlyPoint): void {
    // point.x = 100;
    console.log(point.x)
}

modifyReadonlyPoint({ x: 10, y: 20 });