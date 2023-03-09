"use strict";
// Basic types
let age = 25;
let hobby = "Coding";
let isAdult = true;
let fruit = "apple";
//arrays
let fruits = ["apple", "banana", "orange"];
let arr = ["apple", 25, true];
let numArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//tuples
[1, "apple", true];
let employee = [1, "John"];
let employees = [[1, "John"], [2, "Jane"]];
//objects
let car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969
};
let car1 = {
    brand: "BMW",
    model: "M3",
    year: 2010
};
let newCar = {
    brand: "BMW",
    model: "M3",
    year: 2010
};
//Union
let x = 10;
let jackOccupation = "developer";
//Type Assertion
let y = "hello";
y = 22;
// Functions
function add(a, b) {
    return a + b;
}
function sayHello() {
    console.log("Hello");
}
function copyArray(arr) {
    return [...arr];
}
let numCopy = copyArray([1, 2, 3]);
let strCopy = copyArray(['1', '2', '3']);
//Enum
var EyeColor;
(function (EyeColor) {
    EyeColor["brown"] = "common eye color";
    EyeColor["blue"] = "rare eye color";
    EyeColor["green"] = "very rare eye color";
})(EyeColor || (EyeColor = {}));
function displayStudent(student) {
    const info = student.name + "\n" + student.age + "\n" + student.eyeColor;
    document.body.innerText = info;
}
displayStudent({
    name: "John",
    eyeColor: EyeColor.green
});
