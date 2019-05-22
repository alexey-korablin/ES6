class Task {
    constructor (title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Creating a task');
    }

    get title () {
        return this._title
    }

    set title (value) {
        this._title = value;
    }

    static getDefaultTitle () {
        return 'The Task';
    }

    complete () {
        this.done  = true;
        console.log(`The task ${this.title} is done`);
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor (title, parent) {
        super (title);
        this.parent = parent;
        console.log('Creating subtask')
    }

    complete () {
        super.complete();
        //this.done = true;
        console.log(`The subtask ${this.title} is done`);
    }
}
let task = new Task('Learn JavaScript');
let subtask = new SubTask('Learn ES6', task);

//console.log(subtask instanceof Task);
//console.log(subtask instanceof subTask);
//console.log(subtask.title, subtask.done);
//console.log(task.title, task.done);
//console.log(task, subtask);
subtask.complete();
console.log(subtask.done);
console.log(SubTask.getDefaultTitle(), SubTask.count);
task.complete();