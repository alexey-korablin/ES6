'use strict';

let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('result');
        }, 1000);
    });

p.then(result => {
    console.log('Fulfilled: ' + result);
}, error => {
    console.log('Rejected: ', error);
});

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Time is out'));
    }, 1000);
});

promise.then(
    result => console.log('Fulfilled is ' + result),
    error => console.log('Rejected: ', error.message)
);

let promise0 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Fulfilled'), 1000);
    setTimeout(() => reject(new Error('Rejected')), 2000);
});

promise0.then(
    result => console.log('11:46 Resolve is ', result),
    error => console.log('11:46 Rejected', error.message)
);

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Rejected')), 2000);
    setTimeout(() => resolve('Fulfilled'), 3000);
});

promise1.then(
    result => console.log('11:51 Resolve is ', result),
    error => console.log('11:51 Rejected', error.message)
);

function httpGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMIHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = () => {
            if (this.status == 200) {
                resolve(this.response)
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = () => {
            reject(new Error('Network Error'));
        };
        xhr.send();
    });
}

httpGet("https://learn.javascript.ru/promise").then(
    response => console.log(`fuilfilled: ${response}`),
    error => console.log(`rejected: ${error}`)
);

//function httpGet(url) {
//
//    return new Promise(function(resolve, reject) {
//
//        var xhr = new XMLHttpRequest();
//        xhr.open('GET', url, true);
//
//        xhr.onload = function() {
//            if (this.status == 200) {
//                resolve(this.response);
//            } else {
//                var error = new Error(this.statusText);
//                error.code = this.status;
//                reject(error);
//            }
//        };
//
//        xhr.onerror = function() {
//            reject(new Error("Network Error"));
//        };
//
//        xhr.send();
//    });
//
//}
//
//httpGet("/article/promise/user.json")
//    .then(
//        response => alert(`Fulfilled: ${response}`),
//        error => alert(`Rejected: ${error}`)
//    );