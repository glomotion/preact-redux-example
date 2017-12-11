import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import reduce from '../reducers';
import * as actions from '../actions';

@connect(reduce, actions)
export default class TodoItem extends Component {
	remove = () => {
		let { todo } = this.props;
		this.props.removeTodo(todo);
	};

	rename = () => {
		let { todo } = this.props;
		this.props.renameTodo(todo, "moo cow");
	};

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
