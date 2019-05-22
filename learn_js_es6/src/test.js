'use strict';

let [firstName, lastName] = ['Jon', 'Doe'];

console.log(firstName);
console.log(lastName);

let [,,title] = 'sdgvfs wdfe string wefw wdecfert ewrf'.split(' ');

console.log(title);

let [,,titles, ...rest] = 'sdgvfs wdfe string wefw wdecfert ewrf'.split(' ');

console.log(rest);

let [user = 'guest', pass = 'qwerty'] = ['Buba'];

console.log(user, pass);

function defaultName() {
    return Date.now() + '-visitor';
}

let [fName, lName = defaultName()] = ['Vas'];

console.log(fName, lName);

let options = {
    oprion1: 1,
    option2: 2,
    option3: 3
    };

let {oprion1, option2, option3} = options;

console.log(oprion1, option2, option3);
console.log(typeof option2);

let {oprion1: o1, option2: o2, option3: o3, o4 = 'adkfh'} = options;

console.log(o1, o2, o3, o4);

let options1 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Пончик", "Пирожное"]
}

let {title2, items: [item1, item2], size: {width, height}} = options1;

console.log(item2);

A.prototype