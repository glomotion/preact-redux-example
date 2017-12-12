import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos, state }, { text }) => {
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text
		}],
		...state
	},

	REMOVE_TODO: ({ todos, state }, { todo }) => {
		todos: todos.filter( i => i !== todo ),
		...state
	},


	//             { previous state }     { action }
	// RENAME_TODO: ({ todos, state }, { todo, newText }) => {
	RENAME_TODO: (prevState, action) => {
		console.log(prevState, action);

		// Returns new state:
		// { todos, everything else }
		return { 
			...prevState, 
			todos: prevState.todos.map((t) => {
				if (t.id === action.todo.id) {
					t.text = action.newText;

					// @NOTE: gotta bump the id to let preact know to re-render...
					t.id = Math.random().toString(36).substring(2);
				}
				return t;
			}),
		};
	}
};

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
