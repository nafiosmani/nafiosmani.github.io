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

// Given an array, return the sum of every element. 

function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumOfElements([1, 2, 3, 4, 5, 6]))

// Given a number, return the factorial of that number.

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(4))

// Given a number, all all the numbers from 1 to that number.

function addAll(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(addAll(4))

// Given a number in seconds, return this number in mm:ss format.

function convertSeconds(num) {
    let minutes = Math.floor(num / 60);
    let seconds = num % 60;
    return `${minutes}:${seconds}`;
}

console.log(convertSeconds(120))

// Given an array of numbers, return the largest number of that array.

function largestNumber(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumber([1, 2, 3, 4, 5, 6]))

// Given a string, return the reversed string.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(str.length)
    return reversed;
    
}

console.log(reverseString('hello'))

// Given a string, return the first half of the string.

function firstHalf(str) {
    let half = Math.floor(str.length / 2);
    return str.slice(0, half);
}

console.log(firstHalf('hello'))

// convert string to array 'abc'.split('') => ['a', 'b', 'c']
// 'abc'.split('').reverse().join('') => 'cba'

// Given an array of elements, return the same length filled with 0's.

function fillWithZeros(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(0);
    }
    return newArr;
}

console.log(fillWithZeros([1, 2, 3, 4, 5]))

// Given an array of elements, return the same length filled with 0's using .map()

function fillWithZerosMap(arr) {
    return arr.map(elem => 0);
}
console.log(fillWithZerosMap([1, 2, 3, 4, 5]))



// Given an array of fruits, if it is an apple, remove it from the array using for loop.

function removeApplesFor(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'apple') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeApplesFor(['apple', 'banana', 'apple', 'orange']))

// Given an array of fruits, if it is an apple, remove it from the array.

function removeApples(arr) {
    return arr.filter(elem => elem !== 'apple');
}

console.log(removeApples(['apple', 'banana', 'apple', 'orange']))

// Given an array of values, filter out all the falsy values and only return the truthy values.

function filterOutFalsy(arr) {
    return arr.filter(elem => elem);
}

console.log(filterOutFalsy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, false, true, null, undefined, NaN, 'hello', '']))

// Given an array of values, filter out all the falsy values and only return the truthy values using for loop.      

function filterOutFalsyFor(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterOutFalsyFor([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, false, true, null, undefined, NaN, 'hello', '']))