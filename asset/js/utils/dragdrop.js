function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("id", ev.target.id);
}

function dropAdd(ev) {
	ev.preventDefault();
	const stateTarget = ev.target.getTodoState();
	const todoId = ev.dataTransfer.getData("id");
	console.log(todoId, stateTarget);
	Todos.setTodoStateById(todoId, stateTarget);
}

function dropDelete(ev) {
	ev.preventDefault();
	const todoId = ev.dataTransfer.getData("id");
    if(confirm('Sure Wanna delete?'))Todos.deleteTodoById(todoId);
}

function leaveDropZone(ev) {
    ev.preventDefault();
    ev.target.classList.remove("drop-zone");
}
