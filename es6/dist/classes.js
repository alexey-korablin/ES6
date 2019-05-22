'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    //Task is name of class
    function Task() {
        var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('It\'s creating of a task');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('The task \'' + this.title + '\' was completed');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done ? 'The task ' + this.title + ' is done' : 'The task \'' + this.title + '\' was not completed ';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('Wrong format of trigger');
            }
        }
    }], [{
        key: 'getDefaultTitle',
        value: function getDefaultTitle() {
            return 'Task';
        }
    }]);

    return Task;
}();

//Task.count = 0;

var task1 = new Task('Clean the room');
//let task2 = new Task('Buy the food');
//let task3 = new Task();
//
//console.log(typeof task1);
//console.log(task1 instanceof Task);
//console.log(task1.title);
//console.log(task2.title, task2.done);
//console.log(task2.complete(), task2.done);
//console.log(Task.count);
//console.log(task3.title);

console.log(task1._done);
console.log(task1.done, task1._done);
task1.complete();
console.log(task1.done);