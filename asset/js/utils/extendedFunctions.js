HTMLElement.prototype.getTodoState = function() {
    if(this.tagName === 'body') new Error('getTodoState() can only be called on a todo element')
    return Todos.isValidState(this.id) ? this.id : this.parentElement.getTodoState()
}