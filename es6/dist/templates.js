'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello, ', ''], ['Hello, ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greating(name) {
    console.log('Hello, ' + name);
}

function createEmail(from, to, email, message) {
    console.log('\n        From: ' + from + '\n        To: ' + to + '\n        E-Mail: ' + email + '\n        Message: ' + message + '\n        ');
}

function sum(a, b) {
    console.log(a + ' + ' + b + ' = ' + (a + b));
}

var user = 'John';
var toEmail = ['Bob', user, user + '@mail.ru', 'How are you?'];
var name = 'Bill';

console.log(upperName(_templateObject, name));

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}

greating(user);
createEmail.apply(undefined, toEmail);
sum(14, 28);