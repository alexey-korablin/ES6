'use strict';

var staticlanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
var slanguages = [].concat(staticlanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(slanguages);

function summ(a, b, c) {
    console.log(a + b + c);
}

var arr = [13, 4, 7];

summ.apply(undefined, arr);