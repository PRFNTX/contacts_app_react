import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from "./components/contact-list"
import ContactItem from "./components/contact-item"
import ContactNew from "./components/contact-new"

class App extends Component {
  render() {
    return (
		<div>
			<h1>Super Contact App</h1>
			<ContactList/>
			<ContactNew/>
		</div>
    );
  }
}

export default App;
