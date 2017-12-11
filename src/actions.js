
export function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text
	};
}

export function removeTodo(todo) {
	return {
		type: 'REMOVE_TODO',
		todo
	};
}

export function renameTodo(todo, newText) {
	return {
		type: 'RENAME_TODO',
		todo, newText
	};
}
