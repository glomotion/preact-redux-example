import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import reduce from '../reducers';
import * as actions from '../actions';
import TodoItem from './todo-item';

@connect(reduce, actions)
export default class App extends Component {
	addTodos = () => {
		this.props.addTodo(this.state.text);
		this.setState({ text: '' });
	};

	removeTodo = (todo) => {
		this.props.removeTodo(todo);
	};

	renameTodo = (todo, newText) => {
		this.props.renameTodo(todo, newText);
	};

	updateText = (e) => {
		console.log('state:', this.state, 'props:', this.props);
		this.setState({ text: e.target.value });
	};

	componentDidMount() {
		// console.log(this.state, this.props);
	}

	//   { this.props }, { this.state }
	render({ todos }, { text }) {
		return (
			<div id="app">
				<form onSubmit={this.addTodos} action="javascript:">
					<input value={text} onInput={this.updateText} 
						placeholder="New ToDo..." />
				</form>
				<ul>
					{ todos.map(todo => (
						<TodoItem key={todo.id} todo={todo} 
							onRemove={this.removeTodo} 
							onRename={this.renameTodo}/>
					)) }
				</ul>
			</div>
		);
	}
}
