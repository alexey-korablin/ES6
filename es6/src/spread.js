let staticlanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
let slanguages = [...staticlanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(slanguages);

function summ(a, b, c) {
    console.log( a + b + c );
}

let arr = [13, 4, 7];

summ(...arr );
