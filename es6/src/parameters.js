function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting}, ${name}!`);
}

console.log(greet('Hi', 'Bill'));
console.log(greet());

// Common JS syntax

function sum1() {
    var sum = 0;
    Array.prototype.forEach.call(arguments, function(val) {
        sum += val;
    });
    return sum;
}

console.log(sum1(1, 6, 0, 5));

// ES6 syntax

function sum2(...values) {
    let sum = 0;
    values.forEach(function(val) {
        sum += val;
    });
    return sum;
}

console.log(sum1(1, 6, 0, 5));

//ES6 syntax + reduce

function sum3(...values) {
    values.reduce(function(prevV, curV) {
        return prevV + curV;
    })
}

console.log(sum1(1, 6, 0, 5));
//