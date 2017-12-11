import { h, Component } from 'preact';

export default class TodoItem extends Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	rename = () => {
		let { onRename, todo } = this.props;
		onRename(todo, "moo cow");
	};

	shouldComponentUpdate({ todo }) {
		return todo.id !== this.props.todo.id;
	}

	render({ todo }) {
		return (
			<li>
				<button onClick={this.remove}>×</button>
				{ ' ' + todo.text }
				<button onClick={this.rename}>&mdash;</button>
			</li>
		);
	}
}
