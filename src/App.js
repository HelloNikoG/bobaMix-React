import logo from './logo.svg';
import './App.css';
import NavComponent from './components/NavComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
	return (
		<BrowserRouter>
			<div>
				<NavComponent />
				<div className="App container">
					<div className="row">
						<Switch>
							<Route path="/" exact component={Main} />
							<Route path="/order" component={Main} />
							<Route path="/whatisboba" component={About} />
							<Route path="/contactus" component={Contact} />
						</Switch>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
