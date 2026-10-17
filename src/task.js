class Task {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
    }


    log_todo(){
        console.log(`${this.#title}: ${this.#description}`);
        console.log(`${this.#dueDate}`);
    }
}


const task = new Task("Feed the chickens", "use maize and vegetables peel", "12th oct 2026");
task.log_todo();