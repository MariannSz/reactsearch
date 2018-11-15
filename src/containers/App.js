import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//props -> robots as input
//STATE - an object that describes our app
//children receive the STATE as props

class App extends Component { // smart component bc it has state (containers)
	constructor() {
		super()
		this.state = { // state describes our app, things that can change an d affect the app
			robots: [], // the virtual dom collects this and react uses it to render and pass them as props to components
			searchfield: ''
		}
	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState( {robots: users} ));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value} )
	}
	render() {
		const { robots, searchfield } = this.state; //destructuring
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !robots.length ? //if there's no robots, we are loading (with TERNARY instead of IF-ELSE)
			<h1 className='tc'>Loading</h1> : 
			(
				<div className='tc'>
					<h1 className='f1' >RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll> 
					<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		
	}
}

export default App;