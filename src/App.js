// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.css';

class App extends Component {
	render() {
		return (
			<div className={s.root}>
				<div className={s.header}>
					<img src={logo} className={s.logo} alt="logo" />
					<h2>GohBridge Hub</h2>
				</div>
				<p className={s.intro}>
					This is a web portal to allow you to manage the Philips Hue lights in
					your home.
				</p>
			</div>
		);
	}
}

export default App;
