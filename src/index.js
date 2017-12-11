import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';
import './style';

export default () => (
	<Provider store={store}>
		<App />
	</Provider>
);
