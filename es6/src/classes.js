class Task { //Task is name of class
    constructor (title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('It\'s creating of a task');
    }

    get done () {
        return this._done ? `The task ${this.title} is done` : `The task '${this.title}' was not completed `
    }
    set done (value) {
        if ( value !== undefined && typeof value === 'boolean' ) {
            this._done = value;
        } else {
            console.error ('Wrong format of trigger');
        }
    }

    complete () {
        this.done = true;
        console.log(`The task '${this.title}' was completed`);
    }

    static getDefaultTitle () {
        return 'Task';
    }
}

//Task.count = 0;

let task1 = new Task('Clean the room');
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