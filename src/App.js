import React from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Hello from Reaction!!</h2>
				<p>I was changed on the feature branch!</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
