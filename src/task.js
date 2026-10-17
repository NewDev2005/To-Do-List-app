class Task {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get title(){
        return this.#title;
    }

    set title(title){
        this.#title = title;
    }

    get description(){
        return this.#description;
    }

    set description(description){
        this.#description = description;
    }

    get dueDate(){
        return this.#dueDate;
    }

    set dueDate(value){
        this.#dueDate = value;
    }

    get priority(){
        return this.#priority;
    }

    set priority(priority){
        this.#priority = priority;
    }
}


const task = new Task("Feed the chickens", "use maize and vegetables peel", "12th oct 2026", "high");
task.log_todo();
console.log(task.priority);
task.priority = "low";
console.log(task.priority);