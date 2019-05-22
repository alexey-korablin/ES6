'use strict';

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('result');
    }, 1000);
});

p.then(function (result) {
    console.log('Fulfilled: ' + result);
}, function (error) {
    console.log('Rejected: ', error);
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('Time is out'));
    }, 1000);
});

promise.then(function (result) {
    return console.log('Fulfilled is ' + result);
}, function (error) {
    return console.log('Rejected: ', error.message);
});

var promise0 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return resolve('Fulfilled');
    }, 1000);
    setTimeout(function () {
        return reject(new Error('Rejected'));
    }, 2000);
});

promise0.then(function (result) {
    return console.log('11:46 Resolve is ', result);
}, function (error) {
    return console.log('11:46 Rejected', error.message);
});

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return reject(new Error('Rejected'));
    }, 2000);
    setTimeout(function () {
        return resolve('Fulfilled');
    }, 3000);
});

promise1.then(function (result) {
    return console.log('11:51 Resolve is ', result);
}, function (error) {
    return console.log('11:51 Rejected', error.message);
});

function httpGet(url) {
    var _this = this;

    return new Promise(function (resolve, reject) {
        var xhr = new XMIHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (_this.status == 200) {
                resolve(_this.response);
            } else {
                var error = new Error(_this.statusText);
                error.code = _this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        };
        xhr.send();
    });
}

httpGet("https://learn.javascript.ru/promise").then(function (response) {
    return console.log('fuilfilled: ' + response);
}, function (error) {
    return console.log('rejected: ' + error);
});

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