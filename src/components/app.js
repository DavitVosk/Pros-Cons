import React, { Component } from 'react';
import ProsList from './ProsList';
import ConsList from './ConsList';

export default class App extends Component {
	render () {
		return (
			<div className="app">
				<div className="header">
					<h2>Should I eat at McDonalds?</h2>
				</div>
				<div className="tables">
					<ProsList />
					<ConsList />
				</div>
			</div>
		);
	}
}


