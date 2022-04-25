class Todos {
	static LOCAL_STORAGE_KEY = "todos";

	static todos = [];

	// only called when first time loading the page
	static loadTodos() {
		Todos.todos =
			JSON.parse(localStorage.getItem(Todos.LOCAL_STORAGE_KEY)) ?? [];
		Todos.renderTodos();
	}

	static renderTodos() {
		todo.innerHTML = "";
		ongoing.innerHTML = "";
		completed.innerHTML = "";
		Todos.todos.forEach((toDo) => {
			const p = TodoElements.todoItem(toDo);
			switch (toDo.completionState) {
				case Todo.STATE_TODO:
					todo.appendChild(p);
					break;
				case Todo.STATE_ONGOING:
					ongoing.appendChild(p);
					break;
				case Todo.STATE_COMPLETED:
					completed.appendChild(p);
					break;
			}
		});

		// display not found message if there is no todo or other state
		todo.innerHTML = todo.innerHTML || TodoElements.todoNotFound;
		ongoing.innerHTML = ongoing.innerHTML || TodoElements.ongoingNotFound;
		completed.innerHTML = completed.innerHTML || TodoElements.completedNotFound;
	}

	static saveTodos() {
		localStorage.setItem(Todos.LOCAL_STORAGE_KEY, JSON.stringify(Todos.todos));
	}

	static addTodo(todo) {
		Todos.todos.push(todo);
		Todos.saveTodos();
		Todos.renderTodos();
	}
	
	static deleteTodoById(todoId) {
		Todos.todos = Todos.todos.filter(({ id: id1 }) => id1 !== todoId);
		Todos.saveTodos();
		Todos.renderTodos();
	}
	
	static sortByFirstEntry() {
		Todos.todos.sort(
			({ id: id1 }, { id: id2 }) => parseInt(id1, 16) - parseInt(id2, 16)
		);
		Todos.saveTodos();
		Todos.renderTodos();
	}

	static getItemById(id) {
		return Todos.todos.find(({ id: todoId }) => todoId === id);
	}

	static setTodoStateById(id, state) {
		const todo = Todos.getItemById(id);
		todo.completionState = Todos.isValidState(state)
			? state
			: todo.completionState;
		Todos.sortByFirstEntry();
	}

	static isValidState(state) {
		return [Todo.STATE_COMPLETED, Todo.STATE_ONGOING, Todo.STATE_TODO].includes(
			state
		);
	}
}
