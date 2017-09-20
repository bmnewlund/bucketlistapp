
import React from 'react';
import { Component } from 'react';
import NavBarHeader from './nav';
import BandList from '../containers/BandList';

export default class App extends Component {
	render() {
		return (
			<div>
				<NavBarHeader />
				<BandList />
			</div>
		);
	}
}