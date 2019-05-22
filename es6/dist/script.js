'use strict';

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
    button = buttons[i];

    button.textContent = i + 1;
    button.onclick = function (z) {
        console.log(i + 1);
    };
};

for (var i = 0; i < buttons.length; i++) {
    var button;

    _loop(i);
}