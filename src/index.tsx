import ReactDOM from 'react-dom';
import HomePage from './pages';

const root = document.getElementById('app');

ReactDOM.hydrate(<HomePage />, root);

const Index = () => <HomePage />;

export default Index;
