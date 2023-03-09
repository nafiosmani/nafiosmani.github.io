// Basic types
let age: number = 25;
let hobby: string = "Coding";
let isAdult: boolean = true;
let fruit: any = "apple";

//arrays
let fruits: string[] = ["apple", "banana", "orange"];
let arr: any[] = ["apple", 25, true];
let numArr: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//tuples
[1, "apple", true];
let employee: [number, string] = [1, "John"];

let employees: [number, string][] = [[1, "John"], [2, "Jane"]];

//objects

let car: {
    brand: string;
    model: string;
    year: number;
} = {
    brand: "Ford",
    model: "Mustang",
    year: 1969
}

// custom types

type Car = {
    brand: string;
    model: string;
    year: number;
}

let car1: Car = {
    brand: "BMW",
    model: "M3",
    year: 2010
}


//interface USE THIS

interface Car1 {
    brand: string;
    model: string;
    year: number;
}

let newCar: Car1 = {
    brand: "BMW",
    model: "M3",
    year: 2010
}

//Union

let x: number | string = 10;

type occupation = "developer" | "designer" | "manager";

let jackOccupation: occupation = "developer";

//Type Assertion

let y: any = "hello";
y = 22;

// Functions
function add(a: number, b: number) {
    return a + b;
}

function sayHello(): void {
    console.log("Hello");
}

function copyArray<T>(arr: T[]): T[] {
    return [...arr];
}

let numCopy = copyArray<number>([1, 2, 3]);
let strCopy = copyArray<string>(['1', '2', '3']);


//Enum

enum EyeColor {
    brown = "common eye color",
    blue = "rare eye color",
    green = "very rare eye color"
}


interface Student {
    name: string;
    age?: number;
    eyeColor: EyeColor;
}

function displayStudent(student: Student): void {
    const info: string = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info
}

displayStudent({
    name: "John",
    eyeColor: EyeColor.green
})

