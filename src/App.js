import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from "./components/contact-list"
import ContactItem from "./components/contact-item"

import ContactForm from "./pages/contact-form" 
import Main from "./pages/contact-form" 

class App extends Component {
  render() {
    return (
		<Router>
			<Switch>
				<Route path="/" exact component={Main}>
				<Route path="/new" component={ContactForm}>
				<Route path="/edit/:contact" component={ContactForm}>
			</Switch>
		</Router>
    );
  }
}

export default App;
