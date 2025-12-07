/* 
Enums are a way of giving friendly names to sets of numeric values. 
They can make code more readable and less error-prone.
 */

enum Color {Red, Green, Blue}

let c: Color = Color.Green;

enum Colorr {Red = 10, Green, Blue }

let test: Colorr = Colorr.Blue;

console.log(test)

enum DaysOfWeeks {Monday = 1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}

function isWeekDayorWeekEnd (day: number): string {
    if (day == 6 || day == 7)
        return "weekend"

    return "weekday"
}

let currentDay: DaysOfWeeks = DaysOfWeeks.Monday

let currentDayType: string;

currentDayType = isWeekDayorWeekEnd(currentDay)

console.log(currentDayType)
