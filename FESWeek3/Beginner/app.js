function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3,5))

function hrstosecs (hours) {
    return hours *3600
}

console.log(hrstosecs(2))

function perimeter(length, width) {
    return 2*(length + width)
}

console.log(perimeter(10, 20))

function areatriangle(base, height) {
    return (1/2)*(base*height)
}

console.log(areatriangle(10, 10))

function addstring(string1) {
    return 'Frontend' +string1
}

console.log(addstring(' Simplified'))


function greater100(num1, num2) {
    return (num1 + num2) > 100;

}

console.log(greater100(100, 1))


function lessequalzero(num1) {
    return num1 <= 0;
}

console.log(lessequalzero(-2))

function opptruth(boolean) {
    return !boolean;
}

console.log(opptruth(true))

function notzero(num1) {
  return num1 !== 0
}

console.log(notzero(0))

function odd(num1) {
    return num1 % 2 == 1;

}

console.log(odd(5))


function even(num1) {
    return num1 % 2 === 0 ? 1:-1;
}

console.log(even(3))

function isLoggAndSub(Log, Sub) {
    return(Log==='LOG') && (Sub === 'SUB')
}

console.log(isLoggAndSub('LOG', 'SUB'))

