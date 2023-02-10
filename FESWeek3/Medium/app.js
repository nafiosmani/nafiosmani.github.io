// given two values, return the first one if it is falsy, otherwise return the second one

function falsyorTruthy(elem1, elem2) {
    if (!elem1) {
        return elem1;
    } else {
        return elem2;
    }
}

console.log(falsyorTruthy(0, 10))

//Given, an array, return its length. Return the length of any given array. 
//Path: Medium\app.js

function arrayLength(arr) {
    return arr.length;
}

console.log(arrayLength([1, 2, 3, 4, 5, 6]))

// get the last element of an array. Given an array, return the last element of the array.

function lastElement(arr) {
    return arr[arr.length - 1];
}

console.log(lastElement([1, 2, 3, 4, 5, 6]))

// Given an array, return the first element of the array.

function firstElement(arr) {
    return arr[0];
}

console.log(firstElement([1, 2, 3, 4, 5, 6]))

