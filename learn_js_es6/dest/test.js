'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var firstName = 'Jon';
var lastName = 'Doe';


console.log(firstName);
console.log(lastName);

var _sdgvfsWdfeStringW = 'sdgvfs wdfe string wefw wdecfert ewrf'.split(' ');

var _sdgvfsWdfeStringW2 = _slicedToArray(_sdgvfsWdfeStringW, 3);

var title = _sdgvfsWdfeStringW2[2];


console.log(title);

var _sdgvfsWdfeStringW3 = 'sdgvfs wdfe string wefw wdecfert ewrf'.split(' ');

var _sdgvfsWdfeStringW4 = _toArray(_sdgvfsWdfeStringW3);

var titles = _sdgvfsWdfeStringW4[2];

var rest = _sdgvfsWdfeStringW4.slice(3);

console.log(rest);

var _ref = ['Buba'];
var _ref$ = _ref[0];
var user = _ref$ === undefined ? 'guest' : _ref$;
var _ref$2 = _ref[1];
var pass = _ref$2 === undefined ? 'qwerty' : _ref$2;


console.log(user, pass);

function defaultName() {
    return Date.now() + '-visitor';
}

var _ref2 = ['Vas'];
var fName = _ref2[0];
var _ref2$ = _ref2[1];
var lName = _ref2$ === undefined ? defaultName() : _ref2$;


console.log(fName, lName);

var options = {
    oprion1: 1,
    option2: 2,
    option3: 3
};

var oprion1 = options.oprion1;
var option2 = options.option2;
var option3 = options.option3;


console.log(oprion1, option2, option3);
console.log(typeof option2 === 'undefined' ? 'undefined' : _typeof(option2));

var o1 = options.oprion1;
var o2 = options.option2;
var o3 = options.option3;
var _options$o = options.o4;
var o4 = _options$o === undefined ? 'adkfh' : _options$o;


console.log(o1, o2, o3, o4);

var options1 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Пончик", "Пирожное"]
};

var title2 = options1.title2;

var _options1$items = _slicedToArray(options1.items, 2);

var item1 = _options1$items[0];
var item2 = _options1$items[1];
var _options1$size = options1.size;
var width = _options1$size.width;
var height = _options1$size.height;


console.log(item2);

A.prototype;