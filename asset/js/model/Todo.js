class Todo {
    static STATE_TODO = 'todo';
    static STATE_ONGOING = 'ongoing';
    static STATE_COMPLETED = 'completed';

    constructor(task, completionState) {
        this.id = Date.now().toString(16);
        this.task = task
        this.completionState = completionState
    }
} 