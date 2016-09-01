function greating (name) {
    console.log(`Hello, ${name}`);
}

function createEmail(from, to, email, message) {
    console.log( `
        From: ${from}
        To: ${to}
        E-Mail: ${email}
        Message: ${message}
        ` )
}

function sum(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

let user = 'John';
let toEmail = ['Bob', user, user + '@mail.ru', 'How are you?'];
let name = 'Bill';

console.log(upperName`Hello, ${name}`);

function upperName(literals, value) {
    return literals[0] + value.toUpperCase();
}

greating(user);
createEmail(...toEmail);
sum(14, 28);