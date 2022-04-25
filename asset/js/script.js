Todos.loadTodos();

document.getElementById("addTodo").addEventListener("submit", (ev) => {
	ev.preventDefault();
	const task = ev.target.firstElementChild.value;
	Todos.addTodo(new Todo(task, Todo.STATE_TODO));
});
