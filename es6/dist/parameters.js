'use strict';

function greet() {
    var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
    var name = arguments.length <= 1 || arguments[1] === undefined ? 'friend' : arguments[1];

    console.log(greeting + ', ' + name + '!');
}

console.log(greet('Hi', 'Bill'));
console.log(greet());

// Common JS syntax

function sum1() {
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (val) {
        sum += val;
    });
    return sum;
}

console.log(sum1(1, 6, 0, 5));

// ES6 syntax

function sum2() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    values.forEach(function (val) {
        sum += val;
    });
    return sum;
}

console.log(sum1(1, 6, 0, 5));

//ES6 syntax + reduce

function sum3() {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
    }

    values.reduce(function (prevV, curV) {
        return prevV + curV;
    });
}

console.log(sum1(1, 6, 0, 5));