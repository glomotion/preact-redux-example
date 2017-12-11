import { h, Component } from 'preact';

export default class TodoItem extends Component {
	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	rename = () => {
		let { onRename, todo } = this.props;
		onRename(todo, 'hello world');
		// console.log('rename!!', todo, onRename);
	};

	shouldComponentUpdate({ todo, onRemove, onRename }) {
		return todo !== this.props.todo 
			|| onRemove !== this.props.onRemove
			|| onRename !== this.props.onRename;
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
